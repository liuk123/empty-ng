import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SHARED_ZORRO_MODULES } from './shared-zorro';
import { DragDirective } from './directive/drop-drag/drag.directive';
import { DropDirective } from './directive/drop-drag/drop.directive';
import { DragDropService } from './directive/drop-drag/drag-drop.service';
import { InputNoSpaceDirective } from './directive/input/input-nospace.directive';
import { InputRequiredDirective } from './directive/input/input-require.directive';
import { InputTrimDirective } from './directive/input/input-trim.directive';
import { UtilService } from './utils/util';
import { CommentComponent } from './components/comment/comment.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { BannerComponent } from './components/banner/banner.component';
import { FormItemComponent } from './components/form-item/form-item.component';
import { FormGroupComponent } from './components/form-group/form-group.component';
import { TableBaseComponent } from './components/table-base/table-base.component';
import { FnPipe } from './pipe/fn.pipe';
import { ElDirective } from './directive/el.directive';
import { ReaderFileDirective } from './directive/readerFile.directive';
import { MarkedPipe } from './pipe/marked.pipe';
import { G2chartDirective } from './directive/g2chart.directive';
import { NgUtilService } from './utils/ng-util';
import { MenuTreeComponent } from './components/menu-tree/menu-tree.component';
import { InterSectionDirective } from './directive/interSection.directive';
import { UploadComponent } from './components/upload/upload.component';

//module
const THIRD_MODULES = [
  ...SHARED_ZORRO_MODULES,
]
//component
const COMPONENTS = [
  CommentComponent,
  TextareaComponent,
  BannerComponent,
  FormItemComponent,
  FormGroupComponent,
  TableBaseComponent,
  MenuTreeComponent,
  UploadComponent,
]
//directive
const DIRECTIVES = [
  DragDirective,
  DropDirective,

  InputNoSpaceDirective,
  InputRequiredDirective,
  InputTrimDirective,

  ElDirective,
  ReaderFileDirective,
  G2chartDirective,
  InterSectionDirective
  
];
//pipes
const PIPES = [
  FnPipe,
  MarkedPipe
];
//service
const SERVICE = [
  DragDropService,
  UtilService,
  NgUtilService
]

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,

    ...THIRD_MODULES,
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,

    ...THIRD_MODULES,
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES,
  ],
  providers: SERVICE,
})
export class SharedModule { }
