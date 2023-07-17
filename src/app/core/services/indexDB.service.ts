import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IndexDBService {

  constructor() { }
  /**
   * 打开数据库
   * @param dbName 
   * @param storeName 
   * @returns 
   */
  openDB(dbName, storeName): Observable<IDBDatabase> {
    return new Observable((observer) => {
      if (window && window.indexedDB) {
        const version = 1
        let request: IDBOpenDBRequest = window.indexedDB.open(dbName, version)
        console.log(123)
        request.onsuccess = () => {
          observer.next(request.result)
        }
        request.onerror = (e) => {
          observer.error(e)
        }
        request.onupgradeneeded = () => {
          console.log('upgradeneeded', request.result)
          this.createObjectStore(request.result, storeName)
        }
      }
    })
  }
  createObjectStore(db: IDBDatabase, storeName) {
    if (!db.objectStoreNames.contains(storeName)) {
      db.createObjectStore(storeName, { keyPath: 'id', autoIncrement: true })
    }
  }
  /**
   * 新增数据
   * @param db 
   * @param storeName 
   * @param data 
   * @returns 
   */
  add(db: IDBDatabase, storeName, data: any[]): Observable<any> {
    return new Observable((observer) => {
      let objectStore = db.transaction([storeName], 'readwrite')
        .objectStore(storeName)

      data.forEach(v => {
        let request = objectStore.add(v)
        request.onsuccess = () => {
          observer.next(request.result)
        }
        request.onerror = (e) => {
          observer.error(e)
        }
      })

    })
  }
  /**
   * 读取所有数据
   * @param db 
   * @param storeName 
   * @param key 
   * @returns 
   */
  getAllData(db: IDBDatabase, storeName): Observable<any> {
    return new Observable((observer) => {
      let transaction = db.transaction([storeName])
      let objectStore = transaction.objectStore(storeName)
      let request = objectStore.getAll()
      request.onsuccess = () => {
        observer.next(request.result)
      }
      request.onerror = (e) => {
        observer.error(e)
      }
    })
  }
  /**
   * 读取所有数据
   * @param db 
   * @param storeName 
   * @param key 
   * @returns 
   */
  getAllKeys(db: IDBDatabase, storeName): Observable<any> {
    return new Observable((observer) => {
      let transaction = db.transaction([storeName])
      let objectStore = transaction.objectStore(storeName)
      let request = objectStore.getAllKeys()
      request.onsuccess = () => {
        observer.next(request.result)
      }
      request.onerror = (e) => {
        observer.error(e)
      }
    })
  }
  /**
   * 通过主键读取数据
   * @param db 
   * @param storeName 
   * @param key 
   * @returns 
   */
  getDataByKey(db: IDBDatabase, storeName, key): Observable<any> {
    return new Observable((observer) => {
      let transaction = db.transaction([storeName])
      let objectStore = transaction.objectStore(storeName)
      let request = objectStore.get(key)
      request.onsuccess = () => {
        observer.next(request.result)
      }
      request.onerror = (e) => {
        observer.error(e)
      }
    })
  }
  /**
   * 通过游标读取数据
   * @param db 
   * @param storeName 
   * @returns 
   */
  cursorGetData(db: IDBDatabase, storeName): Observable<any> {
    return new Observable((observer) => {
      let list = []
      let stroe = db.transaction(storeName, 'readwrite')
        .objectStore(storeName)
      let request = stroe.openCursor()
      request.onsuccess = () => {
        let cursor = request.result
        if (cursor) {
          list.push(cursor.value)
          cursor.continue()
        } else {
          observer.next(list)
        }
      }
      request.onerror = (e) => {
        observer.error(e)
      }
    })
  }
  /**
   * 通过索引读取数据
   * @param db 
   * @param storeName 
   * @param indexName 
   * @param indexValue 
   * @returns 
   */
  getDataByIndex(db: IDBDatabase, storeName, indexName, indexValue): Observable<any> {
    return new Observable((observer) => {
      let store = db.transaction(storeName, 'readwrite').objectStore(storeName)
      let request = store.index(indexName).get(indexValue)
      request.onsuccess = () => {
        observer.next(request.result)
      }
      request.onerror = (e) => {
        observer.error(e)
      }
    })
  }
  /**
   * 通过索引和游标读取数据
   * @param db 
   * @param storeName 
   * @param indexName 
   * @param indexValue 
   * @returns 
   */
  cursorGetDataByIndex(db, storeName, indexName, indexValue): Observable<any> {
    return new Observable((observer) => {
      let list = []
      let store = db.transaction(storeName, 'readwrite').objectStore(storeName) // 仓库对象
      let request = store.index(indexName) // 索引对象
        .openCursor(IDBKeyRange.only(indexValue))
      request.onsuccess = () => {
        let cursor = request.result
        if (cursor) {
          list.push(cursor.value)
          cursor.continue()
        } else {
          observer.next(list)
        }
      }
      request.onerror = (e) => {
        observer.error(e)
      }
    })
  }
  /**
   * 更新数据
   * @param db 
   * @param storeName 
   * @param data 
   * @returns 
   */
  update(db: IDBDatabase, storeName, data:any[]) {
    return new Observable((observer) => {
      let store = db.transaction([storeName], 'readwrite') // 事务对象
        .objectStore(storeName) // 仓库对象
        
      data.forEach(v => {
        let request = store.put(v)
        request.onsuccess = () => {
          observer.next(request.result)
        }
        request.onerror = (e) => {
          observer.error(e)
        }
      })
    })
  }
  /**
   * 删除数据
   * @param db 
   * @param storeName 
   * @param id 
   * @returns 
   */
  deleteDB(db: IDBDatabase, storeName, id) {
    return new Observable((observer) => {
      let request = db.transaction([storeName], 'readwrite').objectStore(storeName).delete(id)
      request.onsuccess = () => {
        observer.next(request.result)
      }
      request.onerror = (e) => {
        observer.error(e)
      }
    })
  }
  /**
   * 删除数据库
   * @param dbName 
   * @returns 
   */
  deleteDBAll(dbName) {
    return new Observable((observer) => {
      let request = window.indexedDB.deleteDatabase(dbName)
      request.onsuccess = () => {
        observer.next(request.result)
      }
      request.onerror = (e) => {
        observer.error(e)
      }
    })
  }
  /**
   * 关闭数据库
   * @param db 
   */
  closeDB(db: IDBDatabase) {
    if(db){
      db.close()
      console.log('数据库已关闭')
    }
  }
}
