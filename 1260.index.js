"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1260],{99162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(28276),r=n.n(a),i=n(5368),s=n.n(i)()(r());s.push([e.id,".adsPage .advertisement{margin-top:1.93333em;margin-bottom:2.612em;border:1px solid #f1f1f1}.adsPage .cardContent{padding-top:1.7333em;padding-left:1.66667em;padding-right:1.66667em;flex-direction:column;justify-content:center;align-items:center}.adsPage .adList{display:flex;flex-wrap:wrap;justify-content:space-between;padding:1.73333em 1.66667em}.adsPage .adList .advertisementThumb{flex:0 0 8.86666em;margin-bottom:.7em;-webkit-user-select:none;user-select:none}.adsPage .adList .advertisementThumb.current{outline:.26667em solid #5bc6f9}.adsPage .buttonContainerWithCaption{max-height:5em;background-color:#fff;width:100%;border-top:1px solid #dfdfdf;display:flex;flex-wrap:wrap}.adsPage .buttonContainerWithCaption p{flex:0 0 100%;text-align:center;margin:.5em 0 0;font-size:.93333em}.adsPage .buttonContainerWithCaption .button{font-size:1.06667em;margin:.5em .75em .75em;flex:1}.adsPage .buttonContainerWithCaption .button .ms-Button-flexContainer{padding-top:0;padding-bottom:0}",""]);const o=s},8286:(e,t,n)=>{var a=n(93379),r=n.n(a),i=n(7795),s=n.n(i),o=n(90569),l=n.n(o),d=n(3565),c=n.n(d),m=n(19216),u=n.n(m),g=n(44589),f=n.n(g),v=n(99162),p={};p.styleTagTransform=f(),p.setAttributes=c(),p.insert=l().bind(null,"head"),p.domAPI=s(),p.insertStyleElement=u(),r()(v.Z,p),v.Z&&v.Z.locals&&v.Z.locals},61260:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Z});var a=n(51855),r=n(5591),i=n(1564),s=n(39014),o=n(22405),l=n(67506),d=n(49470),c=n(95251),m=n(85945),u=n(69451),g=n(64469),f=n(43691),v=n(51491),p=n(77478),h=n(64225),E=(n(8286),n(61495)),y=n(906),b=n(88411),x=function(e,t,n,a){return new(n||(n=Promise))((function(r,i){function s(e){try{l(a.next(e))}catch(e){i(e)}}function o(e){try{l(a.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,o)}l((a=a.apply(e,t||[])).next())}))};const C={en:y,he:b},Z=()=>{const[e,t]=(0,a.useState)(""),[n,y]=(0,a.useState)(""),{enqueueSnackbar:b}=(0,h.Ds)(),{handleNotification:Z}=(0,p.V)(),{queueGroupId:w,advertisementId:P}=(0,r.UO)(),T=E.Z.useTranslationNamespace("advertisement",(e=>Promise.resolve(C[e]))),q=(0,m.NL)(),S=(0,r.s0)(),U=(0,a.useRef)(null),{isLoading:k}=(0,u.a)({queryKey:[`advertisement${w}`,w,P],queryFn:()=>d.Z.queueGroup.advertisement.get(w,P),onSuccess:e=>{t(e.text),y(e.imageUrl)},onError:e=>{console.log(e.message)}}),L=(0,g.D)((()=>d.Z.queueGroup.advertisement.patch(w,P,{text:e,imageUrl:n})),{onError:()=>{Z("error",b)},onSuccess:()=>x(void 0,void 0,void 0,(function*(){yield q.invalidateQueries({queryKey:[`advertisement${w}`,w]}),yield q.invalidateQueries({queryKey:[`advertisementAll${w}`,w]}),Z("success",b),U.current.scrollIntoView({behavior:"smooth"})}))}),I=(0,g.D)((()=>d.Z.queueGroup.advertisement.delete(w,P)),{onError:e=>{console.log(e),Z("error",b)},onSuccess:()=>x(void 0,void 0,void 0,(function*(){yield q.invalidateQueries({queryKey:[`advertisement${w}`,w]}),yield q.invalidateQueries({queryKey:[`advertisementAll${w}`,w]}),S(`/queueGroup/${encodeURIComponent(w)}/advertisement`)}))});return L.isError?a.createElement("div",{className:"narrowContent fullHeight"},a.createElement("h1",null,T("editAd")),a.createElement("p",null,T("genericError"))):a.createElement("div",{className:"adsPage"},a.createElement(o.Z,null,a.createElement(f.Z,{hideBackButton:!0,menuProps:{canLogOut:!0}}),a.createElement(v.Z,{title:T("editAd"),iconName:"ad",cardContent:a.createElement("div",{className:"cardContent"},a.createElement(c.Z,{text:e,setText:t,imageUrl:n,setImageUrl:y},I.isError||L.isError&&a.createElement(i.c,{messageBarType:s.f.error},T("genericError")),I.isSuccess||L.isSuccess&&a.createElement(i.c,{messageBarType:s.f.success},T("changesSavedSuccessfully")),a.createElement("div",{ref:U}))),bottomPanel:a.createElement(a.Fragment,null,a.createElement(l.Z,{customButtonType:"secondary",text:T("save"),disabled:k||L.isLoading||I.isLoading,onClick:()=>L.mutate()}),a.createElement(l.Z,{outlined:!0,customButtonType:"default",text:T("delete"),disabled:k||L.isLoading||I.isLoading,onClick:()=>I.mutate()}))})))}},95251:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(51855),r=n(82311),i=n(15211),s=n(61495),o=n(1564),l=n(39014);const d={en:n(906),he:n(88411)},c=e=>{const[t,n]=(0,a.useState)(!1),c=s.Z.useTranslationNamespace("advertisement",(e=>Promise.resolve(d[e])));return a.createElement(a.Fragment,null,a.createElement(a.Fragment,null,a.createElement(r.Z,{label:c("imageLink"),variant:"outlined",size:"small",fullWidth:!0,value:e.imageUrl,onChange:t=>{const a=t.target.value;if(n(!1),""===a)return void e.setImageUrl(a);const r=new Image;r.src=a,r.onload=()=>{const{width:t,height:i}=r,s=t/i;Math.abs(s-16/9)<.1?e.setImageUrl(a):n(!0)},r.onerror=()=>{e.setImageUrl(a)}}}),t&&a.createElement(o.c,{messageBarType:l.f.error},c("aspectRatioError")),a.createElement(i.Z,{text:e.text,imageUrl:e.imageUrl,className:"advertisement"}),a.createElement(r.Z,{size:"small",label:c("text"),rows:2,fullWidth:!0,value:e.text,onChange:t=>e.setText(t.target.value),multiline:!0})),a.createElement("div",null,e.children))}}}]);