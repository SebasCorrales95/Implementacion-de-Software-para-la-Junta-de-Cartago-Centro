import{s as n}from"./select2.min-1c26f31f.js";import"./dropzone.min-af49e826.js";import{Q as l}from"./quill.min-12960bdc.js";import"./dropify.min-b4abec23.js";import"./jquery-4e911315.js";import"./_commonjsHelpers-042e6b4d.js";Dropzone.autoDiscover=!1;(function(e){var o=function(){this.$body=e("body")};o.prototype.init=function(){Dropzone.autoDiscover=!1,e('[data-plugin="dropzone"]').each(function(){var a=e(this).attr("action"),r=e(this).data("previewsContainer"),i={url:a};r&&(i.previewsContainer=r);var t=e(this).data("uploadPreviewTemplate");t&&(i.previewTemplate=e(t).html()),e(this).dropzone(i)})},e.FileUpload=new o,e.FileUpload.Constructor=o})(window.jQuery),function(e){e.FileUpload.init()}(window.jQuery);$('[data-plugins="dropify"]').length>0&&$('[data-plugins="dropify"]').dropify({messages:{default:"Drag and drop a file here or click",replace:"Drag and drop or click to replace",remove:"Remove",error:"Ooops, something wrong appended."},error:{fileSize:"The file size is too big (1M max)."}});n();jQuery(document).ready(function(){new l("#snow-editor",{theme:"snow",modules:{toolbar:[[{font:[]},{size:[]}],["bold","italic","underline","strike"],[{color:[]},{background:[]}],[{script:"super"},{script:"sub"}],[{header:[!1,1,2,3,4,5,6]},"blockquote","code-block"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],["direction",{align:[]}],["link","image","video"],["clean"]]}}),$(".select2").select2({width:"100%"})});