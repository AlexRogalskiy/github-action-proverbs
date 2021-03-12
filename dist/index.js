module.exports=(()=>{"use strict";var __webpack_modules__={932:(module,__unused_webpack_exports,__nccwpck_require__)=>{const core=__nccwpck_require__(186);const path=__nccwpck_require__(622);const http=__nccwpck_require__(211);const fs=__nccwpck_require__(747);const config=__nccwpck_require__(570);const{notBlankOrElse:notBlankOrElse}=__nccwpck_require__(608);async function createImageBy(e,t,n){const r=path.join(t,`${n}.${config.extension}`);console.log(`Generating image with parameters: url=${e}, file=${r}\n`);if(!fs.existsSync(t)){fs.mkdirSync(t)}const o=await fs.createWriteStream(r);await http.get(e,e=>{e.pipe(o)});return r}async function run(){const e=core.getInput("language");const t=core.getInput("pattern");const n=notBlankOrElse(core.getInput("width"),config.width);const r=notBlankOrElse(core.getInput("height"),config.height);const o=notBlankOrElse(core.getInput("backgroundColor"),config.backgroundColor);const s=notBlankOrElse(core.getInput("fontColor"),config.fontColor);const a=notBlankOrElse(core.getInput("opacity"),config.opacity);const i=notBlankOrElse(core.getInput("colorPattern"),config.colorPattern);const c=notBlankOrElse(core.getInput("name"),config.name);const u=notBlankOrElse(core.getInput("path"),config.path);let p=`${config.url}?language=${e}&pattern=${t}`;p=`${p}&width=${encodeURIComponent(n)}&height=${encodeURIComponent(r)}`;p=`${p}&backgroundColor=${o}&fontColor=${s}`;p=`${p}&opacity=${a}&colorPattern=${i}`;try{const e=await createImageBy(p,u,c);core.info(`Storing proverb image by path: ${e}`);core.setOutput("image",e)}catch(e){core.setFailed(`Cannot create proverb image by path: ${u}/${c}, message: ${e.message}`)}}module.exports=run;if(require.main===require.cache[eval("__filename")]){run()}},351:function(e,t,n){var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)if(Object.hasOwnProperty.call(e,n))t[n]=e[n];t["default"]=e;return t};Object.defineProperty(t,"__esModule",{value:true});const o=r(n(87));const s=n(278);function issueCommand(e,t,n){const r=new Command(e,t,n);process.stdout.write(r.toString()+o.EOL)}t.issueCommand=issueCommand;function issue(e,t=""){issueCommand(e,{},t)}t.issue=issue;const a="::";class Command{constructor(e,t,n){if(!e){e="missing.command"}this.command=e;this.properties=t;this.message=n}toString(){let e=a+this.command;if(this.properties&&Object.keys(this.properties).length>0){e+=" ";let t=true;for(const n in this.properties){if(this.properties.hasOwnProperty(n)){const r=this.properties[n];if(r){if(t){t=false}else{e+=","}e+=`${n}=${escapeProperty(r)}`}}}}e+=`${a}${escapeData(this.message)}`;return e}}function escapeData(e){return s.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A")}function escapeProperty(e){return s.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A").replace(/:/g,"%3A").replace(/,/g,"%2C")}},186:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,o){function fulfilled(e){try{step(r.next(e))}catch(e){o(e)}}function rejected(e){try{step(r["throw"](e))}catch(e){o(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((r=r.apply(e,t||[])).next())})};var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)if(Object.hasOwnProperty.call(e,n))t[n]=e[n];t["default"]=e;return t};Object.defineProperty(t,"__esModule",{value:true});const s=n(351);const a=n(717);const i=n(278);const c=o(n(87));const u=o(n(622));var p;(function(e){e[e["Success"]=0]="Success";e[e["Failure"]=1]="Failure"})(p=t.ExitCode||(t.ExitCode={}));function exportVariable(e,t){const n=i.toCommandValue(t);process.env[e]=n;const r=process.env["GITHUB_ENV"]||"";if(r){const t="_GitHubActionsFileCommandDelimeter_";const r=`${e}<<${t}${c.EOL}${n}${c.EOL}${t}`;a.issueCommand("ENV",r)}else{s.issueCommand("set-env",{name:e},n)}}t.exportVariable=exportVariable;function setSecret(e){s.issueCommand("add-mask",{},e)}t.setSecret=setSecret;function addPath(e){const t=process.env["GITHUB_PATH"]||"";if(t){a.issueCommand("PATH",e)}else{s.issueCommand("add-path",{},e)}process.env["PATH"]=`${e}${u.delimiter}${process.env["PATH"]}`}t.addPath=addPath;function getInput(e,t){const n=process.env[`INPUT_${e.replace(/ /g,"_").toUpperCase()}`]||"";if(t&&t.required&&!n){throw new Error(`Input required and not supplied: ${e}`)}return n.trim()}t.getInput=getInput;function setOutput(e,t){s.issueCommand("set-output",{name:e},t)}t.setOutput=setOutput;function setCommandEcho(e){s.issue("echo",e?"on":"off")}t.setCommandEcho=setCommandEcho;function setFailed(e){process.exitCode=p.Failure;error(e)}t.setFailed=setFailed;function isDebug(){return process.env["RUNNER_DEBUG"]==="1"}t.isDebug=isDebug;function debug(e){s.issueCommand("debug",{},e)}t.debug=debug;function error(e){s.issue("error",e instanceof Error?e.toString():e)}t.error=error;function warning(e){s.issue("warning",e instanceof Error?e.toString():e)}t.warning=warning;function info(e){process.stdout.write(e+c.EOL)}t.info=info;function startGroup(e){s.issue("group",e)}t.startGroup=startGroup;function endGroup(){s.issue("endgroup")}t.endGroup=endGroup;function group(e,t){return r(this,void 0,void 0,function*(){startGroup(e);let n;try{n=yield t()}finally{endGroup()}return n})}t.group=group;function saveState(e,t){s.issueCommand("save-state",{name:e},t)}t.saveState=saveState;function getState(e){return process.env[`STATE_${e}`]||""}t.getState=getState},717:function(e,t,n){var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)if(Object.hasOwnProperty.call(e,n))t[n]=e[n];t["default"]=e;return t};Object.defineProperty(t,"__esModule",{value:true});const o=r(n(747));const s=r(n(87));const a=n(278);function issueCommand(e,t){const n=process.env[`GITHUB_${e}`];if(!n){throw new Error(`Unable to find environment variable for file command ${e}`)}if(!o.existsSync(n)){throw new Error(`Missing file at path: ${n}`)}o.appendFileSync(n,`${a.toCommandValue(t)}${s.EOL}`,{encoding:"utf8"})}t.issueCommand=issueCommand},278:(e,t)=>{Object.defineProperty(t,"__esModule",{value:true});function toCommandValue(e){if(e===null||e===undefined){return""}else if(typeof e==="string"||e instanceof String){return e}return JSON.stringify(e)}t.toCommandValue=toCommandValue},570:e=>{const t={url:"https://styled-proverbs.vercel.app/api",name:"proverb",path:"images",extension:"svg",width:"100%",height:"100%",opacity:"0.3",backgroundColor:"%23FFFFFF",fontColor:"%230A83DC",colorPattern:"%23FFE0E9"};e.exports=t},608:e=>{const t=e=>{return e&&e.length>0};const n=e=>{return!e||/^\s*$/.test(e)};const r=(e,t)=>{return n(e)?t:e};const o=e=>{return`(${s(e)})`};const s=e=>{let t="";for(const n in e){if(Object.prototype.hasOwnProperty.call(e,n)){t+=`${n} => ${typeof e[n]==="object"?`[${s(e[n])}]`:`${+e[n]},`}`}}return t};e.exports={toFormatString:o,isNonEmptyString:t,isBlankString:n,notBlankOrElse:r}},747:e=>{e.exports=require("fs")},211:e=>{e.exports=require("https")},87:e=>{e.exports=require("os")},622:e=>{e.exports=require("path")}};var __webpack_module_cache__={};function __nccwpck_require__(e){if(__webpack_module_cache__[e]){return __webpack_module_cache__[e].exports}var t=__webpack_module_cache__[e]={exports:{}};var n=true;try{__webpack_modules__[e].call(t.exports,t,t.exports,__nccwpck_require__);n=false}finally{if(n)delete __webpack_module_cache__[e]}return t.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(932)})();