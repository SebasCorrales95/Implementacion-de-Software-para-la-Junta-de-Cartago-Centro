import{c as R}from"./_commonjsHelpers-042e6b4d.js";var O={},F={get exports(){return O},set exports(k){O=k}},j;function D(){return j||(j=1,function(k,z){(function(g,S){k.exports=S()})(R,function(){var g=function(r,e){this.items=r,this.settings=e||{diacritics:!0}};g.prototype.tokenize=function(r){if(r=l(String(r||"").toLowerCase()),!r||!r.length)return[];var e,t,n,i,s=[],f=r.split(/ +/);for(e=0,t=f.length;e<t;e++){if(n=x(f[e]),this.settings.diacritics)for(i in v)v.hasOwnProperty(i)&&(n=n.replace(new RegExp(i,"g"),v[i]));s.push({string:f[e],regex:new RegExp(n,"i")})}return s},g.prototype.iterator=function(r,e){var t;d(r)?t=Array.prototype.forEach||function(n){for(var i=0,s=this.length;i<s;i++)n(this[i],i,this)}:t=function(n){for(var i in this)this.hasOwnProperty(i)&&n(this[i],i,this)},t.apply(r,[e])},g.prototype.getScoreFunction=function(r,e){var t,n,i,s,f;t=this,r=t.prepareSearch(r,e),i=r.tokens,n=r.options.fields,s=i.length,f=r.options.nesting;var y=function(u,c){var a,p;return!u||(u=String(u||""),p=u.search(c.regex),p===-1)?0:(a=c.string.length/u.length,p===0&&(a+=.5),a)},m=function(){var u=n.length;return u?u===1?function(c,a){return y(o(a,n[0],f),c)}:function(c,a){for(var p=0,w=0;p<u;p++)w+=y(o(a,n[p],f),c);return w/u}:function(){return 0}}();return s?s===1?function(u){return m(i[0],u)}:r.options.conjunction==="and"?function(u){for(var c,a=0,p=0;a<s;a++){if(c=m(i[a],u),c<=0)return 0;p+=c}return p/s}:function(u){for(var c=0,a=0;c<s;c++)a+=m(i[c],u);return a/s}:function(){return 0}},g.prototype.getSortFunction=function(r,e){var t,n,i,s,f,y,m,u,c,a,p;if(i=this,r=i.prepareSearch(r,e),p=!r.query&&e.sort_empty||e.sort,c=function(w,A){return w==="$score"?A.score:o(i.items[A.id],w,e.nesting)},f=[],p)for(t=0,n=p.length;t<n;t++)(r.query||p[t].field!=="$score")&&f.push(p[t]);if(r.query){for(a=!0,t=0,n=f.length;t<n;t++)if(f[t].field==="$score"){a=!1;break}a&&f.unshift({field:"$score",direction:"desc"})}else for(t=0,n=f.length;t<n;t++)if(f[t].field==="$score"){f.splice(t,1);break}for(u=[],t=0,n=f.length;t<n;t++)u.push(f[t].direction==="desc"?-1:1);return y=f.length,y?y===1?(s=f[0].field,m=u[0],function(w,A){return m*S(c(s,w),c(s,A))}):function(w,A){var P,E,b;for(P=0;P<y;P++)if(b=f[P].field,E=u[P]*S(c(b,w),c(b,A)),E)return E;return 0}:null},g.prototype.prepareSearch=function(r,e){if(typeof r=="object")return r;e=h({},e);var t=e.fields,n=e.sort,i=e.sort_empty;return t&&!d(t)&&(e.fields=[t]),n&&!d(n)&&(e.sort=[n]),i&&!d(i)&&(e.sort_empty=[i]),{options:e,query:String(r||"").toLowerCase(),tokens:this.tokenize(r),total:0,items:[]}},g.prototype.search=function(r,e){var t=this,n,i,s,f;return i=this.prepareSearch(r,e),e=i.options,r=i.query,f=e.score||t.getScoreFunction(i),r.length?t.iterator(t.items,function(y,m){n=f(y),(e.filter===!1||n>0)&&i.items.push({score:n,id:m})}):t.iterator(t.items,function(y,m){i.items.push({score:1,id:m})}),s=t.getSortFunction(i,e),s&&i.items.sort(s),i.total=i.items.length,typeof e.limit=="number"&&(i.items=i.items.slice(0,e.limit)),i};var S=function(r,e){return typeof r=="number"&&typeof e=="number"?r>e?1:r<e?-1:0:(r=_(String(r||"")),e=_(String(e||"")),r>e?1:e>r?-1:0)},h=function(r,e){var t,n,i,s;for(t=1,n=arguments.length;t<n;t++)if(s=arguments[t],!!s)for(i in s)s.hasOwnProperty(i)&&(r[i]=s[i]);return r},o=function(r,e,t){if(!(!r||!e)){if(!t)return r[e];for(var n=e.split(".");n.length&&(r=r[n.shift()]););return r}},l=function(r){return(r+"").replace(/^\s+|\s+$|/g,"")},x=function(r){return(r+"").replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")},d=Array.isArray||typeof $<"u"&&$.isArray||function(r){return Object.prototype.toString.call(r)==="[object Array]"},v={a:"[aḀḁĂăÂâǍǎȺⱥȦȧẠạÄäÀàÁáĀāÃãÅåąĄÃąĄ]",b:"[b␢βΒB฿𐌁ᛒ]",c:"[cĆćĈĉČčĊċC̄c̄ÇçḈḉȻȼƇƈɕᴄＣｃ]",d:"[dĎďḊḋḐḑḌḍḒḓḎḏĐđD̦d̦ƉɖƊɗƋƌᵭᶁᶑȡᴅＤｄð]",e:"[eÉéÈèÊêḘḙĚěĔĕẼẽḚḛẺẻĖėËëĒēȨȩĘęᶒɆɇȄȅẾếỀềỄễỂểḜḝḖḗḔḕȆȇẸẹỆệⱸᴇＥｅɘǝƏƐε]",f:"[fƑƒḞḟ]",g:"[gɢ₲ǤǥĜĝĞğĢģƓɠĠġ]",h:"[hĤĥĦħḨḩẖẖḤḥḢḣɦʰǶƕ]",i:"[iÍíÌìĬĭÎîǏǐÏïḮḯĨĩĮįĪīỈỉȈȉȊȋỊịḬḭƗɨɨ̆ᵻᶖİiIıɪＩｉ]",j:"[jȷĴĵɈɉʝɟʲ]",k:"[kƘƙꝀꝁḰḱǨǩḲḳḴḵκϰ₭]",l:"[lŁłĽľĻļĹĺḶḷḸḹḼḽḺḻĿŀȽƚⱠⱡⱢɫɬᶅɭȴʟＬｌ]",n:"[nŃńǸǹŇňÑñṄṅŅņṆṇṊṋṈṉN̈n̈ƝɲȠƞᵰᶇɳȵɴＮｎŊŋ]",o:"[oØøÖöÓóÒòÔôǑǒŐőŎŏȮȯỌọƟɵƠơỎỏŌōÕõǪǫȌȍՕօ]",p:"[pṔṕṖṗⱣᵽƤƥᵱ]",q:"[qꝖꝗʠɊɋꝘꝙq̃]",r:"[rŔŕɌɍŘřŖŗṘṙȐȑȒȓṚṛⱤɽ]",s:"[sŚśṠṡṢṣꞨꞩŜŝŠšŞşȘșS̈s̈]",t:"[tŤťṪṫŢţṬṭƮʈȚțṰṱṮṯƬƭ]",u:"[uŬŭɄʉỤụÜüÚúÙùÛûǓǔŰűŬŭƯưỦủŪūŨũŲųȔȕ∪]",v:"[vṼṽṾṿƲʋꝞꝟⱱʋ]",w:"[wẂẃẀẁŴŵẄẅẆẇẈẉ]",x:"[xẌẍẊẋχ]",y:"[yÝýỲỳŶŷŸÿỸỹẎẏỴỵɎɏƳƴ]",z:"[zŹźẐẑŽžŻżẒẓẔẕƵƶ]"},_=function(){var r,e,t,n,i="",s={};for(t in v)if(v.hasOwnProperty(t))for(n=v[t].substring(2,v[t].length-1),i+=n,r=0,e=n.length;r<e;r++)s[n.charAt(r)]=t;var f=new RegExp("["+i+"]","g");return function(y){return y.replace(f,function(m){return s[m]}).toLowerCase()}}();return g})}(F)),O}var q={},L={get exports(){return q},set exports(k){q=k}},C;function B(){return C||(C=1,function(k,z){(function(g,S){k.exports=S()})(R,function(){var g={};g.mixin=function(h){h.plugins={},h.prototype.initializePlugins=function(o){var l,x,d,v=this,_=[];if(v.plugins={names:[],settings:{},requested:{},loaded:{}},S.isArray(o))for(l=0,x=o.length;l<x;l++)typeof o[l]=="string"?_.push(o[l]):(v.plugins.settings[o[l].name]=o[l].options,_.push(o[l].name));else if(o)for(d in o)o.hasOwnProperty(d)&&(v.plugins.settings[d]=o[d],_.push(d));for(;_.length;)v.require(_.shift())},h.prototype.loadPlugin=function(o){var l=this,x=l.plugins,d=h.plugins[o];if(!h.plugins.hasOwnProperty(o))throw new Error('Unable to find "'+o+'" plugin');x.requested[o]=!0,x.loaded[o]=d.fn.apply(l,[l.plugins.settings[o]||{}]),x.names.push(o)},h.prototype.require=function(o){var l=this,x=l.plugins;if(!l.plugins.loaded.hasOwnProperty(o)){if(x.requested[o])throw new Error('Plugin has circular dependency ("'+o+'")');l.loadPlugin(o)}return x.loaded[o]},h.define=function(o,l){h.plugins[o]={name:o,fn:l}}};var S={isArray:Array.isArray||function(h){return Object.prototype.toString.call(h)==="[object Array]"}};return g})}(L)),q}export{B as a,D as r};
