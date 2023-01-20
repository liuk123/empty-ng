import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HtmlParserWorkerService } from 'src/app/shared/worker/htmlparser-worker.service';
import { ConfigService } from 'src/app/core/services/config.service';
import { HTMLMarkedService } from 'src/app/shared/utils/html-marked';

@Component({
  selector: 'app-html-marked',
  templateUrl: './html-marked.component.html',
  styleUrls: ['./html-marked.component.less']
})
export class HtmlMarkedComponent implements OnInit, OnDestroy {
  
  @ViewChild('edit', { read: ElementRef, static: true })
  edit: ElementRef
  @ViewChild('field', { read: ElementRef, static: true })
  field: ElementRef
  resultValue=''
  unSub$ = new Subject()

  constructor(
    private HtmlParserWorkerService: HtmlParserWorkerService,
    private hTMLMarkedService: HTMLMarkedService
  ) { }

  ngOnInit(): void {
    if(ConfigService.Config.isBrowser){
      window.addEventListener('paste', this.pasteFn)
      this.HtmlParserWorkerService.start()
      this.HtmlParserWorkerService.workerEvent.pipe(takeUntil(this.unSub$)).subscribe(htmlTree=>{
        let ret = this.hTMLMarkedService.getContent(htmlTree, this.hTMLMarkedService.markdownOption, null)
        let markdownStr = ret.replace(/^[\t\r\n]+|[\t\r\n\s]+$/g, '')
        .replace(/\n\s+\n/g, '\n\n')
        .replace(/\n{3,}/g, '\n\n')
        this.resultValue = this.insert(this.field.nativeElement, this.resultValue, markdownStr)
      })
    }
  }
  ngOnDestroy(): void {
    if(ConfigService.Config.isBrowser){
      window.removeEventListener('paste', this.pasteFn)
      this.HtmlParserWorkerService.stop()
      this.unSub$.next()
      this.unSub$.complete()
    }
  }
  pasteFn=this.editChange.bind(this)

  insert(textarea, resultValue, markdownStr){
    var startPos = textarea.selectionStart;
    var endPos = textarea.selectionEnd;
    if(startPos!==undefined){
      var beforeValue = resultValue.substring(0, startPos);
      var afterValue = resultValue.substring(endPos, resultValue.length);
      resultValue = beforeValue + markdownStr + afterValue;
      textarea.selectionStart = startPos + markdownStr.length;
      textarea.selectionEnd = startPos + markdownStr.length;
      textarea.focus()
    }
    return resultValue
  }
  editChange(e:ClipboardEvent){
    e.preventDefault()
    const clipboardData = e.clipboardData.getData('text/html')
    let markdownStr = ''
    if(clipboardData){
      this.HtmlParserWorkerService.postMessage(clipboardData)
    }else{
      markdownStr = e.clipboardData.getData('text/plain')
      this.resultValue = this.insert(this.field.nativeElement, this.resultValue, markdownStr)
    }
  }

}
