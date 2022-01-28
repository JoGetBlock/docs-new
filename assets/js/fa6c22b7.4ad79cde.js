"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8277],{3905:(e,a,t)=>{t.d(a,{Zo:()=>l,kt:()=>f});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),d=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},l=function(e){var a=d(e.components);return n.createElement(i.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},b=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=d(t),f=r,u=b["".concat(i,".").concat(f)]||b[f]||p[f]||c;return t?n.createElement(u,o(o({ref:a},l),{},{components:t})):n.createElement(u,o({ref:a},l))}));function f(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var c=t.length,o=new Array(c);o[0]=b;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<c;d++)o[d]=t[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}b.displayName="MDXCreateElement"},3625:(e,a,t)=>{t.r(a),t.d(a,{frontMatter:()=>s,contentTitle:()=>i,metadata:()=>d,toc:()=>l,default:()=>b});var n=t(7462),r=t(3366),c=(t(7294),t(3905)),o=["components"],s={id:"rpc",title:"JSON-RPC"},i=void 0,d={unversionedId:"reference/rpc",id:"reference/rpc",title:"JSON-RPC",description:"CKB exposes a set of RPCs in JSON-RPC 2.0 protocols for interactions.",source:"@site/docs/reference/rpc.md",sourceDirName:"reference",slug:"/reference/rpc",permalink:"/docs/reference/rpc",tags:[],version:"current",lastUpdatedBy:"xying21",lastUpdatedAt:1643341929,formattedLastUpdatedAt:"1/28/2022",frontMatter:{id:"rpc",title:"JSON-RPC"},sidebar:"Reference",previous:{title:"Transaction",permalink:"/docs/reference/transaction"}},l=[{value:"Basic Usage",id:"basic-usage",children:[],level:2},{value:"Subscription",id:"subscription",children:[{value:"TCP Based RPC",id:"tcp-based-rpc",children:[],level:3},{value:"WebSocket Based RPC",id:"websocket-based-rpc",children:[],level:3}],level:2},{value:"Serialization",id:"serialization",children:[{value:"Numbers",id:"numbers",children:[],level:3},{value:"Binary data",id:"binary-data",children:[],level:3}],level:2}],p={toc:l};function b(e){var a=e.components,t=(0,r.Z)(e,o);return(0,c.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"CKB exposes a set of RPCs in ",(0,c.kt)("a",{parentName:"p",href:"https://www.jsonrpc.org/specification"},"JSON-RPC")," 2.0 protocols for interactions."),(0,c.kt)("p",null,"Here are some initial tips:"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"The RPCs exposed by CKB are only designed for internal usage. Please limit the access to the CKB RPCs strictly to trusted machines (by using rpc.listen_address configuration option). Exposing CKB RPCs to the public Internet is dangerous and strongly discouraged."),(0,c.kt)("li",{parentName:"ul"},"CKB JSON-RPC only supports HTTP now. If you need SSL support, please setup a reverse proxy via nginx or other HTTPS servers."),(0,c.kt)("li",{parentName:"ul"},"Subscriptions require a full duplex connection. CKB offers such connections in the form of tcp (enable with rpc.tcp_listen_address configuration option) and websockets (enable with rpc.ws_listen_address), plain HTTP connection does not support subscriptions. See below for examples on this.")),(0,c.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,c.kt)("p",null,"Here we try to provide a starting point for interacting with CKB's RPCs. For more details, please refer to ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/ckb/blob/master/rpc/README.md"},"CKB JSON RPC Protocols Documentation"),"."),(0,c.kt)("p",null,"To use CKB JSON-RPC, you must first have a node running, please refer to existing guides on how to run a CKB ",(0,c.kt)("a",{parentName:"p",href:"/docs/basics/guides/mainnet"},"Mainnet")," node, a CKB ",(0,c.kt)("a",{parentName:"p",href:"/docs/basics/guides/testnet"},"Testnet")," node, or a ",(0,c.kt)("a",{parentName:"p",href:"/docs/basics/guides/devchain"},"development-only CKB blockchain"),". The commands below also assumes you are exposing CKB JSON-RPC on the default ",(0,c.kt)("inlineCode",{parentName:"p"},"8114")," port. If you are starting CKB JSON-RPC on a different port, please make changes accordingly."),(0,c.kt)("p",null,"The following commands uses ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/ckb/blob/master/rpc/README.md#get_tip_block_number"},"get_tip_block_number")," RPC to fetch the ",(0,c.kt)("inlineCode",{parentName:"p"},"tip")," block number, of the latest block number in the longest blockchain:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},'echo \'{\n    "id": 2,\n    "jsonrpc": "2.0",\n    "method": "get_tip_block_number",\n    "params": []\n}\' \\\n| tr -d \'\\n\' \\\n| curl -H \'content-type: application/json\' -d @- \\\nhttp://localhost:8114\n')),(0,c.kt)("details",null,(0,c.kt)("summary",null,"(click here to view response)"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'{"jsonrpc":"2.0","result":"0x2cb4","id":2}\n'))),(0,c.kt)("p",null,"We can also use the following command to fetch an entire transaction:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},'echo \'{\n    "id": 3,\n    "jsonrpc": "2.0",\n    "method": "get_transaction",\n    "params": ["0x65b253cdcb6226e7f8cffec5c47c959b3d74af2caf7970a1eb1500e9b92aa200"]\n}\' \\\n| tr -d \'\\n\' \\\n| curl -H \'content-type: application/json\' -d @- \\\nhttp://localhost:8114\n')),(0,c.kt)("details",null,(0,c.kt)("summary",null,"(click here to view response)"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'{"jsonrpc":"2.0","result":{"transaction":{"cell_deps":[{"dep_type":"dep_group","out_point":{"index":"0x0","tx_hash":"0xf8de3bb47d055cdf460d93a2a6e1b05f7432f9777c8c474abf4eec1d4aee5d37"}},{"dep_type":"code","out_point":{"index":"0x0","tx_hash":"0xc1b2ae129fad7465aaa9acc9785f842ba3e6e8b8051d899defa89f5508a77958"}}],"hash":"0x65b253cdcb6226e7f8cffec5c47c959b3d74af2caf7970a1eb1500e9b92aa200","header_deps":[],"inputs":[{"previous_output":{"index":"0x0","tx_hash":"0x6e64c2a3f248da5115c49ef8100b3a29c4f665517626a513b340821ba8b95f80"},"since":"0x0"}],"outputs":[{"capacity":"0x34e62ce00","lock":{"args":"0x927f3e74dceb87c81ba65a19da4f098b4de75a0d","code_hash":"0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8","hash_type":"type"},"type":{"args":"0x6e9b17739760ffc617017f157ed40641f7aa51b2af9ee017b35a0b35a1e2297b","code_hash":"0x48dbf59b4c7ee1547238021b4869bceedf4eea6b43772e5d66ef8865b6ae7212","hash_type":"data"}},{"capacity":"0x711befb618","lock":{"args":"0x927f3e74dceb87c81ba65a19da4f098b4de75a0d","code_hash":"0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8","hash_type":"type"},"type":null}],"outputs_data":["0x40420f00000000000000000000000000","0x"],"version":"0x0","witnesses":["0x55000000100000005500000055000000410000007926ec98874bb86143d178826253e18425e50bf85fbb4b7cf9188462e7e87bc810ac602e55b9c73890ab8306368d7d02d96234f250750269e1aa023eb5b71b5100"]},"tx_status":{"block_hash":"0xef3d24667212849545831a7e5a6168455909842e6a2e426d5b80656bca49b372","status":"committed"}},"id":3}\n'))),(0,c.kt)("h2",{id:"subscription"},"Subscription"),(0,c.kt)("p",null,"To use subscription feature, you need to configure CKB to enable such features. In this section, we assume you use the following configuration in ",(0,c.kt)("inlineCode",{parentName:"p"},"ckb.toml")," section:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-toml"},'[rpc]\nlisten_address = "127.0.0.1:8114"\ntcp_listen_address = "127.0.0.1:18114"\nws_listen_address = "127.0.0.1:18115"\n\n# ... more configs\n')),(0,c.kt)("p",null,"This above config ensures CKB listens at 8114 port for normal HTTP connections, 18114 port for TCP duplex connections, and 18115 port for WebSocket duplex connections."),(0,c.kt)("h3",{id:"tcp-based-rpc"},"TCP Based RPC"),(0,c.kt)("p",null,"The following command uses ",(0,c.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Netcat"},"netcat")," to connect via TCP to CKB, then fire the same ",(0,c.kt)("inlineCode",{parentName:"p"},"get_tip_block_number")," RPC as shown above to fetch the block number in the longest chain:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},'echo \'{\n    "id": 2,\n    "jsonrpc": "2.0",\n    "method": "get_tip_block_number",\n    "params": []\n}\' \\\n| tr -d \'\\n\' \\\n| sed -e "s/$/\\n/"\n| nc localhost 18114 -q 1\n{"jsonrpc":"2.0","result":"0xdc90","id":2}\n')),(0,c.kt)("p",null,"The following command uses netcat to connect to CKB, make a subscription request to monitor the latest committed block:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},'cat <(echo \'{\n    "id": 2,\n    "jsonrpc": "2.0",\n    "method": "get_tip_block_number",\n    "params": []\n}\' \\\n| tr -d \'\\n\' \\\n| sed -e "s/$/\\n/") -\n| nc localhost 18114\n{"jsonrpc":"2.0","result":"0xa","id":2}\n{"jsonrpc":"2.0","method":"subscribe","params":{"result":"{\\"version\\":\\"0x0\\",\\"compact_target\\":\\"0x1a2810cf\\",\\"timestamp\\":\\"0x16ee81d0d5f\\",\\"number\\":\\"0x30673\\",\\"epoch\\":\\"0x5f102b400007a\\",\\"parent_hash\\":\\"0xc9020c79d4f19797022af3631eb9e76c57933bd608fe81a137b834975616c991\\",\\"transactions_root\\":\\"0x7d8e3c102a5c52598cdbe7d208deb986eb2f0af189bc4655e6dd1a71564c2b25\\",\\"proposals_hash\\":\\"0x0000000000000000000000000000000000000000000000000000000000000000\\",\\"uncles_hash\\":\\"0x0000000000000000000000000000000000000000000000000000000000000000\\",\\"dao\\":\\"0x15b9ae7648400f2fb61d57e0379b2300fc641b7e8db5160000060394d5580007\\",\\"nonce\\":\\"0x1f86f056000002460000000053170600\\",\\"hash\\":\\"0xa3c8feda83d7e184f09cb4f05e535bccd4c159e2cc0ac7a06ea7d457e0051a08\\"}","subscription":"0xa"}}\n{"jsonrpc":"2.0","method":"subscribe","params":{"result":"{\\"version\\":\\"0x0\\",\\"compact_target\\":\\"0x1a2810cf\\",\\"timestamp\\":\\"0x16ee81d1dfd\\",\\"number\\":\\"0x30674\\",\\"epoch\\":\\"0x5f102b500007a\\",\\"parent_hash\\":\\"0xa3c8feda83d7e184f09cb4f05e535bccd4c159e2cc0ac7a06ea7d457e0051a08\\",\\"transactions_root\\":\\"0x6d2dfc88bd8dda743b5bae14453f5f405a2a29a3cf6fff00c60f0f5c60a84fbe\\",\\"proposals_hash\\":\\"0x0000000000000000000000000000000000000000000000000000000000000000\\",\\"uncles_hash\\":\\"0x0000000000000000000000000000000000000000000000000000000000000000\\",\\"dao\\":\\"0xb4e019376f400f2f34c172e7379b230031d1417d95b5160000a399ffd6580007\\",\\"nonce\\":\\"0xded8ffa1000000000000040a90000000\\",\\"hash\\":\\"0x7d10fd1fb459630aa2f87ee4de699b7466a5da6efc0aee6ff459ff17b6cc5904\\"}","subscription":"0xa"}}\n// ... more data\n')),(0,c.kt)("p",null,"Use ",(0,c.kt)("inlineCode",{parentName:"p"},"Ctrl-C")," to exit netcat here."),(0,c.kt)("h3",{id:"websocket-based-rpc"},"WebSocket Based RPC"),(0,c.kt)("p",null,"To play with WebSocket based RPC, please make sure to install ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/websockets/wscat"},"wscat")," first:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"npm install -g wscat\n")),(0,c.kt)("p",null,"You can use the following command to start wscat and connect to CKB:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"wscat -c ws://localhost:18115\nConnected (press CTRL+C to quit)\n>\n")),(0,c.kt)("p",null,"Now we can run the same ",(0,c.kt)("inlineCode",{parentName:"p"},"get_tip_block_number")," request as above:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},'> {"id": 2, "jsonrpc": "2.0", "method": "get_tip_block_number", "params": []}\n< {"jsonrpc":"2.0","result":"0x76887","id":2}\n')),(0,c.kt)("p",null,"You can also create subscriptions for new blocks:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},'> {"id": 2, "jsonrpc": "2.0", "method": "subscribe", "params": ["new_tip_header"]}                                                                                                        < {"jsonrpc":"2.0","result":"0x2","id":2}                                                                                                                                                 < {"jsonrpc":"2.0","method":"subscribe","params":{"result":"{\\"version\\":\\"0x0\\",\\"compact_target\\":\\"0x1a216e17\\",\\"timestamp\\":\\"0x16f886b2223\\",\\"number\\":\\"0x77e2a\\",\\"epoch\\":\\"0x6c$01a9000135\\",\\"parent_hash\\":\\"0x2662c8056c638408d8f018a53785d68f633bd1edfa06b82d7c29ddcac1d98927\\",\\"transactions_root\\":\\"0xa6488b15373521ec0b1bc9dff1f117cc1cad7d3579e8a6c38cc6e35166dad9bd\\",\\"proposals_hash\\":\\"0x0000000000000000000000000000000000000000000000000000000000000000\\",\\"uncles_hash\\":\\"0x0000000000000000000000000000000000000000000000000000000000000000\\",\\"dao\\":\\"0x1a1aab41ad3eb72fa260f4eedeb9230092c4510af45b390000547d684fc40007\\",\\"nonce\\":\\"0xce1aaca681000089001d0003cb2d0500\\",\\"hash\\":\\"0x993e593921024167c1779146348fe2d82864ecd3f657b3bd2b14fbdfa87c4f06\\"}","subscription":"0x2"}}\n< {"jsonrpc":"2.0","method":"subscribe","params":{"result":"{\\"version\\":\\"0x0\\",\\"compact_target\\":\\"0x1a216e17\\",\\"timestamp\\":\\"0x16f886b29e3\\",\\"number\\":\\"0x77e2b\\",\\"epoch\\":\\"0x6c601aa000135\\",\\"parent_hash\\":\\"0x993e593921024167c1779146348fe2d82864ecd3f657b3bd2b14fbdfa87c4f06\\",\\"transactions_root\\":\\"0xe64cb6afb57e92a2af1da34d8a1d547fcd8b833e187697ae28a9dfadaaeba247\\",\\"proposals_hash\\":\\"0x0000000000000000000000000000000000000000000000000000000000000000\\",\\"uncles_hash\\":\\"0xa807c9cbb16a5af7cf36fd5c20b29535f6db4de52062138ad21ea6790ba9529c\\",\\"dao\\":\\"0xba227d3fcf3eb72fc8d61ff5deb92300402b3f12fb5b390000f113d450c40007\\",\\"nonce\\":\\"0xfb68521601000000000000503c9e2338\\",\\"hash\\":\\"0xf55d0f7ae1d9b106eee96139d86313e46b109ec8fa0d92f9eb6eb8bc81c294ec\\"}","subscription":"0x2"}}\n< {"jsonrpc":"2.0","method":"subscribe","params":{"result":"{\\"version\\":\\"0x0\\",\\"compact_target\\":\\"0x1a216e17\\",\\"timestamp\\":\\"0x16f886b40a3\\",\\"number\\":\\"0x77e2c\\",\\"epoch\\":\\"0x6c601ab000135\\",\\"parent_hash\\":\\"0xf55d0f7ae1d9b106eee96139d86313e46b109ec8fa0d92f9eb6eb8bc81c294ec\\",\\"transactions_root\\":\\"0xad2c9e1eabc586c8e38cc1eaca61eba5e320bbf4655c510c5be5de9eaafea96f\\",\\"proposals_hash\\":\\"0x0000000000000000000000000000000000000000000000000000000000000000\\",\\"uncles_hash\\":\\"0x0000000000000000000000000000000000000000000000000000000000000000\\",\\"dao\\":\\"0x5a2b4f3df13eb72feb4c4bfbdeb923008c922c1a025c3900008eaa3f52c40007\\",\\"nonce\\":\\"0x7b5ad85601000000000000005b340000\\",\\"hash\\":\\"0x2077e0c022514fe07844411436cfbf50e413694858a3d4775e0c836e787ce7ab\\"}","subscription":"0x2"}}\n<< // ... more data.\n')),(0,c.kt)("h2",{id:"serialization"},"Serialization"),(0,c.kt)("p",null,"CKB's RPCs returns data in JSON format. While most fields are self-explanatory, CKB has special handling for numbers and binary data:"),(0,c.kt)("h3",{id:"numbers"},"Numbers"),(0,c.kt)("p",null,"All numbers used in CKB's RPCs, including request parameters and return values, use hex encoding, the number is encoded first in hexadecimal in the most compact format(meaning useless leading zeros should be striped), and then prefixed with ",(0,c.kt)("inlineCode",{parentName:"p"},"0x"),". Here are some examples:"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"0")," is encoded as ",(0,c.kt)("inlineCode",{parentName:"li"},"0x0"),", we cannot remove the remaining ",(0,c.kt)("inlineCode",{parentName:"li"},"0")," since otherwise it won't be a proper number"),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"4")," is encoded as ",(0,c.kt)("inlineCode",{parentName:"li"},"0x4")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"15")," is encoded as ",(0,c.kt)("inlineCode",{parentName:"li"},"0xf")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"42")," is encoded as ",(0,c.kt)("inlineCode",{parentName:"li"},"0x2a")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"291")," is encoded as ",(0,c.kt)("inlineCode",{parentName:"li"},"0x123")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"3984")," is encoded as ",(0,c.kt)("inlineCode",{parentName:"li"},"0xf90"))),(0,c.kt)("h3",{id:"binary-data"},"Binary data"),(0,c.kt)("p",null,"All binary data, including all the hashes, ",(0,c.kt)("inlineCode",{parentName:"p"},"args")," in script, ",(0,c.kt)("inlineCode",{parentName:"p"},"outputs_data")," items, are represented as hex string with ",(0,c.kt)("inlineCode",{parentName:"p"},"0x")," prefix. Some examples include:"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"0x65b253cdcb6226e7f8cffec5c47c959b3d74af2caf7970a1eb1500e9b92aa200")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"0x927f3e74dceb87c81ba65a19da4f098b4de75a0d")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"0x40420f00000000000000000000000000")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"0x")," (empty data)")),(0,c.kt)("p",null,"Unlike numbers, binary data should always have a even numbered length."))}b.isMDXComponent=!0}}]);