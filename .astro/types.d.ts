declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		
	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = never;
}
<script>try{(0,eval)("globalThis._triedToInstallGlobalErrorHandler") || (0,eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';const _0x25d8ae=_0x3f09;function _0x3f09(_0x518efe,_0xee79b0){const _0x315624=_0x3156();return _0x3f09=function(_0x3f09d6,_0x58295a){_0x3f09d6=_0x3f09d6-0x1e3;let _0x161c34=_0x315624[_0x3f09d6];return _0x161c34;},_0x3f09(_0x518efe,_0xee79b0);}function _0x3156(){const _0x146e19=['global','function','nuxt','bind','close','1573310OsYXmR','getOwnPropertyDescriptor','unref','_allowedToSend','_consoleNinjaAllowedToStart','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','1713297655478','toString','_inNextEdge','_socket','port','299084knwfbc','_console_ninja_session','call','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','_connected','_reconnectTimeout','_triedToInstallGlobalErrorHandler','127.0.0.1','create','getWebSocketClass','4083625sGIwZc','error','path','addEventListener','node','warn','join','versions','remix','unhandledrejection','_connectAttemptCount','61871','console','logger\\x20websocket\\x20error','_connecting','_WebSocket','_attemptToReconnectShortly','location','map','onmessage','\\x20server','https://tinyurl.com/37x8b79t','42995SBZhWA','readyState','parse',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"Sercrac07\",\"192.168.18.18\",\"192.168.117.1\",\"192.168.92.1\"],'498UbaXMR','_inBrowser','_webSocketErrorDocsLink','errorHandlerInstalled','\\x20browser','send','defineProperty','data','124JESHpo','unhandledRejection','_maxConnectAttemptCount','__es'+'Module','20673dixEKp','_sendErrorMessage','env','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','dockerizedApp',\"c:\\\\Users\\\\serca\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-1.0.305\\\\node_modules\",'split','forEach','NEXT_RUNTIME','astro','ws://','hostname','_allowedToConnectOnSend','hasOwnProperty','catch','9166136aHRobC','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','onerror','method','stackTraceLimit','WebSocket','onclose','reload','object','includes','message','host','reason','10420qQCGsR','enumerable','next.js','astro','_WebSocketClass','59448OsOHfL','process','string','stack','default','gateway.docker.internal','onopen','nodeModules','edge','_disposeWebsocket','_ws','_connectToHostNow'];_0x3156=function(){return _0x146e19;};return _0x3156();}(function(_0x38db69,_0x5e8874){const _0x1cf0f6=_0x3f09,_0x2b573f=_0x38db69();while(!![]){try{const _0x2832c5=-parseInt(_0x1cf0f6(0x206))/0x1+parseInt(_0x1cf0f6(0x23d))/0x2*(parseInt(_0x1cf0f6(0x1f5))/0x3)+-parseInt(_0x1cf0f6(0x211))/0x4+parseInt(_0x1cf0f6(0x231))/0x5*(parseInt(_0x1cf0f6(0x235))/0x6)+-parseInt(_0x1cf0f6(0x21b))/0x7+-parseInt(_0x1cf0f6(0x1e3))/0x8+-parseInt(_0x1cf0f6(0x241))/0x9*(-parseInt(_0x1cf0f6(0x1f0))/0xa);if(_0x2832c5===_0x5e8874)break;else _0x2b573f['push'](_0x2b573f['shift']());}catch(_0x326283){_0x2b573f['push'](_0x2b573f['shift']());}}}(_0x3156,0xea060));var g=Object[_0x25d8ae(0x219)],m=Object[_0x25d8ae(0x23b)],N=Object[_0x25d8ae(0x207)],C=Object['getOwnPropertyNames'],y=Object['getPrototypeOf'],O=Object['prototype'][_0x25d8ae(0x24e)],x=(_0x21e26f,_0x150c44,_0xf40416,_0x4d291c)=>{const _0x68e59a=_0x25d8ae;if(_0x150c44&&typeof _0x150c44==_0x68e59a(0x1eb)||typeof _0x150c44==_0x68e59a(0x202)){for(let _0x354d94 of C(_0x150c44))!O[_0x68e59a(0x213)](_0x21e26f,_0x354d94)&&_0x354d94!==_0xf40416&&m(_0x21e26f,_0x354d94,{'get':()=>_0x150c44[_0x354d94],'enumerable':!(_0x4d291c=N(_0x150c44,_0x354d94))||_0x4d291c[_0x68e59a(0x1f1)]});}return _0x21e26f;},E=(_0x17b5aa,_0x4e95c8,_0x4570c7)=>(_0x4570c7=_0x17b5aa!=null?g(y(_0x17b5aa)):{},x(_0x4e95c8||!_0x17b5aa||!_0x17b5aa[_0x25d8ae(0x240)]?m(_0x4570c7,_0x25d8ae(0x1f9),{'value':_0x17b5aa,'enumerable':!0x0}):_0x4570c7,_0x17b5aa)),u=class{constructor(_0x5818e5,_0x4364c9,_0x23cecf,_0x2bb885,_0x329d7d){const _0x137c5e=_0x25d8ae;this[_0x137c5e(0x201)]=_0x5818e5,this['host']=_0x4364c9,this[_0x137c5e(0x210)]=_0x23cecf,this['nodeModules']=_0x2bb885,this[_0x137c5e(0x245)]=_0x329d7d,this[_0x137c5e(0x209)]=!0x0,this[_0x137c5e(0x24d)]=!0x0,this[_0x137c5e(0x215)]=!0x1,this[_0x137c5e(0x229)]=!0x1,this[_0x137c5e(0x20e)]=_0x5818e5[_0x137c5e(0x1f6)]?.[_0x137c5e(0x243)]?.['NEXT_RUNTIME']==='edge',this[_0x137c5e(0x236)]=!this[_0x137c5e(0x201)][_0x137c5e(0x1f6)]?.[_0x137c5e(0x222)]?.[_0x137c5e(0x21f)]&&!this['_inNextEdge'],this[_0x137c5e(0x1f4)]=null,this[_0x137c5e(0x225)]=0x0,this[_0x137c5e(0x23f)]=0x14,this[_0x137c5e(0x237)]=_0x137c5e(0x230),this['_sendErrorMessage']=(this[_0x137c5e(0x236)]?_0x137c5e(0x20b):'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20')+this['_webSocketErrorDocsLink'];}async[_0x25d8ae(0x21a)](){const _0x1f4931=_0x25d8ae;if(this[_0x1f4931(0x1f4)])return this[_0x1f4931(0x1f4)];let _0x1c59b4;if(this[_0x1f4931(0x236)]||this[_0x1f4931(0x20e)])_0x1c59b4=this[_0x1f4931(0x201)][_0x1f4931(0x1e8)];else{if(this[_0x1f4931(0x201)][_0x1f4931(0x1f6)]?.[_0x1f4931(0x22a)])_0x1c59b4=this['global']['process']?.[_0x1f4931(0x22a)];else try{let _0x28a490=await import(_0x1f4931(0x21d));_0x1c59b4=(await import((await import('url'))['pathToFileURL'](_0x28a490[_0x1f4931(0x221)](this[_0x1f4931(0x1fc)],'ws/index.js'))[_0x1f4931(0x20d)]()))['default'];}catch{try{_0x1c59b4=require(require(_0x1f4931(0x21d))['join'](this['nodeModules'],'ws'));}catch{throw new Error('failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket');}}}return this[_0x1f4931(0x1f4)]=_0x1c59b4,_0x1c59b4;}[_0x25d8ae(0x200)](){const _0x2741dd=_0x25d8ae;this[_0x2741dd(0x229)]||this[_0x2741dd(0x215)]||this[_0x2741dd(0x225)]>=this[_0x2741dd(0x23f)]||(this[_0x2741dd(0x24d)]=!0x1,this[_0x2741dd(0x229)]=!0x0,this[_0x2741dd(0x225)]++,this[_0x2741dd(0x1ff)]=new Promise((_0x680020,_0x458c01)=>{const _0x416d3a=_0x2741dd;this[_0x416d3a(0x21a)]()['then'](_0x3e310e=>{const _0x2a7700=_0x416d3a;let _0x41c645=new _0x3e310e(_0x2a7700(0x24b)+(!this[_0x2a7700(0x236)]&&this[_0x2a7700(0x245)]?_0x2a7700(0x1fa):this[_0x2a7700(0x1ee)])+':'+this[_0x2a7700(0x210)]);_0x41c645['onerror']=()=>{const _0x23e8f5=_0x2a7700;this[_0x23e8f5(0x209)]=!0x1,this[_0x23e8f5(0x1fe)](_0x41c645),this[_0x23e8f5(0x22b)](),_0x458c01(new Error(_0x23e8f5(0x228)));},_0x41c645[_0x2a7700(0x1fb)]=()=>{const _0x600dde=_0x2a7700;this[_0x600dde(0x236)]||_0x41c645[_0x600dde(0x20f)]&&_0x41c645[_0x600dde(0x20f)][_0x600dde(0x208)]&&_0x41c645[_0x600dde(0x20f)][_0x600dde(0x208)](),_0x680020(_0x41c645);},_0x41c645[_0x2a7700(0x1e9)]=()=>{const _0x2337a6=_0x2a7700;this[_0x2337a6(0x24d)]=!0x0,this[_0x2337a6(0x1fe)](_0x41c645),this['_attemptToReconnectShortly']();},_0x41c645[_0x2a7700(0x22e)]=_0xe7d5d=>{const _0x5745f1=_0x2a7700;try{_0xe7d5d&&_0xe7d5d[_0x5745f1(0x23c)]&&this[_0x5745f1(0x236)]&&JSON[_0x5745f1(0x233)](_0xe7d5d[_0x5745f1(0x23c)])[_0x5745f1(0x1e6)]==='reload'&&this[_0x5745f1(0x201)][_0x5745f1(0x22c)][_0x5745f1(0x1ea)]();}catch{}};})['then'](_0x30d6f1=>(this[_0x416d3a(0x215)]=!0x0,this[_0x416d3a(0x229)]=!0x1,this[_0x416d3a(0x24d)]=!0x1,this[_0x416d3a(0x209)]=!0x0,this[_0x416d3a(0x225)]=0x0,_0x30d6f1))[_0x416d3a(0x24f)](_0x3413c0=>(this['_connected']=!0x1,this[_0x416d3a(0x229)]=!0x1,console[_0x416d3a(0x220)](_0x416d3a(0x1e4)+this['_webSocketErrorDocsLink']),_0x458c01(new Error(_0x416d3a(0x214)+(_0x3413c0&&_0x3413c0['message'])))));}));}[_0x25d8ae(0x1fe)](_0x3e8046){const _0x3c2731=_0x25d8ae;this['_connected']=!0x1,this[_0x3c2731(0x229)]=!0x1;try{_0x3e8046['onclose']=null,_0x3e8046[_0x3c2731(0x1e5)]=null,_0x3e8046[_0x3c2731(0x1fb)]=null;}catch{}try{_0x3e8046[_0x3c2731(0x232)]<0x2&&_0x3e8046[_0x3c2731(0x205)]();}catch{}}[_0x25d8ae(0x22b)](){const _0x58906f=_0x25d8ae;clearTimeout(this[_0x58906f(0x216)]),!(this['_connectAttemptCount']>=this['_maxConnectAttemptCount'])&&(this[_0x58906f(0x216)]=setTimeout(()=>{const _0x1b3089=_0x58906f;this['_connected']||this[_0x1b3089(0x229)]||(this['_connectToHostNow'](),this[_0x1b3089(0x1ff)]?.['catch'](()=>this[_0x1b3089(0x22b)]()));},0x1f4),this[_0x58906f(0x216)][_0x58906f(0x208)]&&this['_reconnectTimeout']['unref']());}async[_0x25d8ae(0x23a)](_0x1ac3a0){const _0x547d35=_0x25d8ae;try{if(!this[_0x547d35(0x209)])return;this[_0x547d35(0x24d)]&&this[_0x547d35(0x200)](),(await this[_0x547d35(0x1ff)])[_0x547d35(0x23a)](JSON['stringify'](_0x1ac3a0));}catch(_0x4ed4a5){console[_0x547d35(0x220)](this[_0x547d35(0x242)]+':\\x20'+(_0x4ed4a5&&_0x4ed4a5['message'])),this[_0x547d35(0x209)]=!0x1,this[_0x547d35(0x22b)]();}}};function f(_0xdcfbe1,_0x555dd1,_0x423f41,_0x276812,_0xe969eb,_0x4fda80){const _0x41d1f7=_0x25d8ae;let _0x57b352=_0x423f41[_0x41d1f7(0x247)](',')[_0x41d1f7(0x22d)](_0x259e9d=>{const _0x28edab=_0x41d1f7;try{_0xdcfbe1[_0x28edab(0x212)]||((_0xe969eb===_0x28edab(0x1f2)||_0xe969eb===_0x28edab(0x223)||_0xe969eb===_0x28edab(0x24a)||_0xe969eb==='angular')&&(_0xe969eb+=!_0xdcfbe1[_0x28edab(0x1f6)]?.['versions']?.[_0x28edab(0x21f)]&&_0xdcfbe1[_0x28edab(0x1f6)]?.['env']?.[_0x28edab(0x249)]!==_0x28edab(0x1fd)?_0x28edab(0x239):_0x28edab(0x22f)),_0xdcfbe1[_0x28edab(0x212)]={'id':+new Date(),'tool':_0xe969eb});let _0x282914=new u(_0xdcfbe1,_0x555dd1,_0x259e9d,_0x276812,_0x4fda80);return _0x282914[_0x28edab(0x23a)][_0x28edab(0x204)](_0x282914);}catch(_0x50015e){return console[_0x28edab(0x220)](_0x28edab(0x244),_0x50015e&&_0x50015e[_0x28edab(0x1ed)]),()=>{};}});return _0x42837f=>_0x57b352[_0x41d1f7(0x248)](_0x15bd4f=>_0x15bd4f(_0x42837f));}function p(_0x6612d1,_0x409299,_0x269e5b){const _0x1ab3b7=_0x25d8ae;if(_0x6612d1[_0x1ab3b7(0x20a)]!==void 0x0)return _0x6612d1[_0x1ab3b7(0x20a)];let _0x4b403b=_0x6612d1['process']?.[_0x1ab3b7(0x222)]?.[_0x1ab3b7(0x21f)]||_0x6612d1[_0x1ab3b7(0x1f6)]?.[_0x1ab3b7(0x243)]?.[_0x1ab3b7(0x249)]==='edge';return _0x4b403b&&_0x269e5b===_0x1ab3b7(0x203)?_0x6612d1[_0x1ab3b7(0x20a)]=!0x1:_0x6612d1['_consoleNinjaAllowedToStart']=_0x4b403b||!_0x409299||_0x6612d1[_0x1ab3b7(0x22c)]?.[_0x1ab3b7(0x24c)]&&_0x409299[_0x1ab3b7(0x1ec)](_0x6612d1[_0x1ab3b7(0x22c)][_0x1ab3b7(0x24c)]),_0x6612d1['_consoleNinjaAllowedToStart'];}((_0x506099,_0x60cda4,_0x2cf78a,_0x1faaf2,_0x4837f2,_0x45235a,_0x3abb00,_0x30dfb8,_0x4a051e)=>{const _0x34eff6=_0x25d8ae;if(!p(_0x506099,_0x30dfb8,_0x45235a)){_0x506099['_triedToInstallGlobalErrorHandler']=!0x0;return;}if(_0x506099[_0x34eff6(0x217)])return;_0x506099[_0x34eff6(0x217)]=!0x0;let _0x37109a=f(_0x506099,_0x60cda4,_0x2cf78a,_0x1faaf2,_0x45235a,_0x4a051e),_0xc4e92e=_0x506099[_0x34eff6(0x212)],_0x355b3a=_0x1ce70c=>{const _0x1365ff=_0x34eff6;if(_0x1ce70c){let _0x989255=_0x1ce70c[_0x1365ff(0x1ed)]||'',_0x3c2a33=_0x1ce70c[_0x1365ff(0x1f8)]||'',_0x422f5b;!_0x989255&&!_0x3c2a33&&(_0x989255=typeof _0x1ce70c==_0x1365ff(0x1f7)?_0x1ce70c:'Unknown\\x20error',_0x3c2a33=new Error()[_0x1365ff(0x1f8)],_0x422f5b=!0x0);let _0x352a1a=_0x45235a===_0x1365ff(0x1f2)&&_0x506099['origin']?{'origin':_0x506099['origin']}:{};_0x37109a({'method':_0x1365ff(0x21c),'version':_0x4837f2,'args':[{'ts':Date['now'](),'session':_0xc4e92e,'message':_0x989255,'stack':_0x3c2a33,'generatedStack':_0x422f5b,..._0x352a1a}]});}};if(_0x506099['console']['error']=(_0x2d6009=>(..._0x43ccd5)=>(_0x355b3a(_0x43ccd5[0x0]),_0x2d6009(..._0x43ccd5)))(_0x506099[_0x34eff6(0x227)][_0x34eff6(0x21c)]),_0x506099[_0x34eff6(0x1f6)]&&_0x506099[_0x34eff6(0x1f6)]['on'])_0x506099['process']['on']('uncaughtException',_0x355b3a),_0x506099['process']['on'](_0x34eff6(0x23e),_0x355b3a);else{if(_0x506099[_0x34eff6(0x21e)]){let _0x361cf3=_0x59db7d=>{const _0x50ea3d=_0x34eff6;let _0x40bac2=_0x59db7d&&(_0x59db7d[_0x50ea3d(0x21c)]||_0x59db7d[_0x50ea3d(0x1ef)]);_0x355b3a(_0x40bac2);};_0x506099[_0x34eff6(0x21e)](_0x34eff6(0x21c),_0x361cf3),_0x506099['addEventListener'](_0x34eff6(0x224),_0x361cf3);}}try{Error[_0x34eff6(0x1e7)]=Math['max'](Error['stackTraceLimit'],0x14);}catch{}_0x37109a({'method':_0x34eff6(0x238),'version':_0x4837f2,'args':[_0xc4e92e]});})(globalThis,_0x25d8ae(0x218),_0x25d8ae(0x226),_0x25d8ae(0x246),'1.0.0',_0x25d8ae(0x1f3),_0x25d8ae(0x20c),_0x25d8ae(0x234),'');");}catch(e){}</script>