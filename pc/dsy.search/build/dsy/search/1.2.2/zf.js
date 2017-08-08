define("dsy/search/1.2.2/zf",["dsy/search/1.2.2/interface"],function(e,t,r){"use strict";function s(){a.call(this),this.tag="zf",this.suffix="\u79df\u623f",this.init()}var o=seajs.data.vars,a=e("dsy/search/1.2.2/interface");s.prototype=Object.create(a.prototype),s.prototype.constructor=s,s.prototype.init=function(){this.tpl=["<tr data-key=\"{{search_key}}\" data-search='{{search_object}}'>",'<th><p>{{suggest_word}}&nbsp;<span class="gray9">{{suggest_district}}</span></p></th>',"<td><p>{{suggest_count}}</p></td>","</tr>"].join(""),this.defaultText=o.searchDefaultText.zf,this.defaultHref=o.searchDefaultHref.zf,this.historyKey=this.getHistoryKey(this.tag)},s.prototype.formatSearch=function(e){var t=this;return{key:e.key||"",hrefUrl:e.hrefUrl||"",district:e.district||"",tag:t.tag,suffix:t.suffix,category:e.category||"",id:e.id||"",comerce:e.comerce||"",purpose:e.purpose||""}},s.prototype.replaceTpl=function(e){var t=this.tpl;return t=t.replace("{{search_key}}",e.key),t=t.replace("{{search_object}}",JSON.stringify(e)),t=t.replace("{{suggest_word}}",e.key),t=t.replace("{{suggest_district}}",e.district+" "+e.comerce),t=t.replace("{{suggest_count}}","\u7ea6"+e.count+"\u6761\u623f\u6e90")},s.prototype.getOneRowSuggest=function(e){for(var t=this,r=["","-\u4e00\u5c45","-\u4e8c\u5c45","-\u4e09\u5c45","-\u56db\u5c45"],s="",o=0;o<5;o++){var a=e["rentcount"+(o||"")];if("0"!==a){var c=t.formatSearch({key:e.projname+r[o],district:e.district,category:e.category,id:e.id,comerce:e.comerce,purpose:e.purpose});c.count=a,s+=t.replaceTpl(c)}}return s},s.prototype.getAllRowSuggest=function(e){for(var t=this,r="",s=0;s<e.length;s++){var o=e[s],a=o.esfcount;if("0"!==a){var c=o.category,i=t.formatSearch({key:"6"===c||"7"===c?o.projname+"\u79df\u623f":o.projname,district:o.district,category:c,id:o.id,comerce:o.comerce,purpose:o.purpose});i.count=a,r+=t.replaceTpl(i)}}return r},s.prototype.getSuggestHtml=function(e){var t=this,r=JSON.parse(e),s=r.hit,a="";s.length&&(a=1===s.length?t.getOneRowSuggest(s[0]):"1"===s[0].category&&s[0].projname===o.searchInput.val()?t.getOneRowSuggest(s[0]):t.getAllRowSuggest(s)),t.suggestHtml=a},s.prototype.searchByKey=function(e,t){var r=this,s=r.defaultHref,a=o.cityCode;if(e&&e!==r.defaultText&&(s="bt"===a||"hd"===a||"jining"===a||"lc"===a||"linyi"===a||"zb"===a?s+"/renthouse/s31-kw"+r.encode(e):"hengyang"===a||"wuhu"===a||"ganzhou"===a||"yancheng"===a||"zhenjiang"===a||"st"===a||"leshan"===a||"lyg"===a||"xiangyang"===a||"mas"===a||"zhuzhou"===a||"bengbu"===a||"bh"===a||"sx"===a||"liuzhou"===a||"yueyang"===a||"huzhou"===a||"zhoushan"===a?s+"/renthouse/kw"+r.encode(e)+"/":s+"/house/s31-kw"+r.encode(e)+"/"),o.aHref.href=s,o.aHref.click(),+t.store){var c=r.formatSearch({key:e,hrefUrl:s});r.setHistory(e,c)}},r.exports=new s});