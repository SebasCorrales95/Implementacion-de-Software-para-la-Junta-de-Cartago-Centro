import{s as n}from"./select2.min-1c26f31f.js";import"./dropzone.min-af49e826.js";/* empty css                      */import"./flatpickr.min-c062c6ca.js";import"./jquery-4e911315.js";import"./_commonjsHelpers-042e6b4d.js";n();(function(t){var e=function(){this.$body=t("body")};e.prototype.init=function(){Dropzone.autoDiscover=!1,t('[data-plugin="dropzone"]').each(function(){var r=t(this).attr("action"),i=t(this).data("previewsContainer"),o={url:r};i&&(o.previewsContainer=i);var a=t(this).data("uploadPreviewTemplate");a&&(o.previewTemplate=t(a).html()),t(this).dropzone(o)})},t.FileUpload=new e,t.FileUpload.Constructor=e})(window.jQuery),function(t){t.FileUpload.init()}(window.jQuery);$('[data-toggle="select2"]').select2();$('[data-toggle="flatpicker"]').flatpickr({altInput:!0,altFormat:"F j, Y",dateFormat:"Y-m-d"});