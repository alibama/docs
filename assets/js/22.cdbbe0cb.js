(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{390:function(t,e,r){"use strict";r.r(e);var o=r(24),a=Object(o.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"libraries-and-tooling"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#libraries-and-tooling"}},[t._v("#")]),t._v(" Libraries and Tooling")]),t._v(" "),r("h2",{attrs:{id:"block-explorer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#block-explorer"}},[t._v("#")]),t._v(" Block Explorer")]),t._v(" "),r("p",[t._v("The VocExplorer is a web frontend that allows any third party to query and observe the Vochain processes, votes, organizations, transactions, etc. It is developed in golang using the "),r("a",{attrs:{href:"https://github.com/hexops/vecty",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vecty"),r("OutboundLink")],1),t._v(" framework and compiling to Web Assembly.")]),t._v(" "),r("p",[t._v("The VocExplorer frontend queries the "),r("RouterLink",{attrs:{to:"/architecture/services/gateway.html#api-definition"}},[t._v("Gateway Api")]),t._v(" for publicly-available information from the Vochain. Users can host their own combination of explorer frontend and gateway node and can also manually query gateway nodes.")],1),t._v(" "),r("ul",[r("li",[t._v("See "),r("a",{attrs:{href:"https://github.com/vocdoni/vocexplorer",target:"_blank",rel:"noopener noreferrer"}},[t._v("VocExplorer"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"dvote-js"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dvote-js"}},[t._v("#")]),t._v(" DVote JS")]),t._v(" "),r("p",[t._v("This library is the more versatile and extensive of the ecosystem, since it allows to target both web and app clients, as well as it does with backend services. It provides all wrappers to interact with all decentralized methods andd resources, covering the whole process.")]),t._v(" "),r("p",[t._v("The intended functionality is to interact with a public Ethereum blockchain, to fetch data from a decentralized filesystem, to enforce data schema validity, to prepare vote packages and using decentralized messaging networks through Gateways.")]),t._v(" "),r("ul",[r("li",[t._v("See "),r("a",{attrs:{href:"https://github.com/vocdoni/dvote-js",target:"_blank",rel:"noopener noreferrer"}},[t._v("DVote JS on GitHub"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("See an example integration of "),r("a",{attrs:{href:"https://blog.vocdoni.io/introducing-voting-as-a-service/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Voting as a Service"),r("OutboundLink")],1),t._v(" using DVote JS")])]),t._v(" "),r("h2",{attrs:{id:"go-dvote"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#go-dvote"}},[t._v("#")]),t._v(" Go DVote")]),t._v(" "),r("p",[t._v("Similarly to DVote JS, Go DVote provides an extensive toolkit to interact with Vocdoni, in addition to actually running it. Beyond the SDK libraries, Go DVote also allows to spin up a DVote Gateway, a Vochain Miner, a Census Service, etc.")]),t._v(" "),r("p",[t._v("Its intent is to enable P2P access to its JS counterparts, and process data conforming to the standard formats and data structures.")]),t._v(" "),r("ul",[r("li",[t._v("See "),r("a",{attrs:{href:"https://github.com/vocdoni/go-dvote",target:"_blank",rel:"noopener noreferrer"}},[t._v("Go DVote on GitHub"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"dvote-solidity"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dvote-solidity"}},[t._v("#")]),t._v(" DVote Solidity")]),t._v(" "),r("p",[t._v("Provides the Smart Contracts supporting the trustless management of entities, processes and namespaces. It also provides documentation, TypeScript wrappers and ABI to attach to the contracts from client applications.")]),t._v(" "),r("ul",[r("li",[t._v("See "),r("a",{attrs:{href:"https://github.com/vocdoni/dvote-solidity",target:"_blank",rel:"noopener noreferrer"}},[t._v("DVote Solidity on GitHub"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("See the "),r("RouterLink",{attrs:{to:"/architecture/smart-contracts/entity-resolver.html#entity-resolver"}},[t._v("Entity Resolver smart contract")])],1),t._v(" "),r("li",[t._v("See the "),r("RouterLink",{attrs:{to:"/architecture/smart-contracts/process.html#smart-contract"}},[t._v("Process smart contract")])],1),t._v(" "),r("li",[t._v("See the "),r("RouterLink",{attrs:{to:"/architecture/smart-contracts/namespace.html#contract"}},[t._v("Namespace smart contract")])],1)]),t._v(" "),r("h2",{attrs:{id:"dvote-flutter"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dvote-flutter"}},[t._v("#")]),t._v(" DVote Flutter")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",[t._v("Note that all flutter/dart libraries are deprecated at the moment, as we are no longer developing a mobile application")])]),t._v(" "),r("p",[t._v("This library features a subset of DVote JS features, tailored to the usage on mobile apps consuming decentralized metadata and governance processes. While most of the plumbing is developed in Dart, all performance sensitive computations are handled by native versions. See DVote Flutter Native below.")]),t._v(" "),r("p",[t._v("This library is likely to be refactored into a pure Dart version and a Flutter superset in the future.")]),t._v(" "),r("ul",[r("li",[t._v("See "),r("a",{attrs:{href:"https://github.com/vocdoni/dvote-flutter",target:"_blank",rel:"noopener noreferrer"}},[t._v("DVote Flutter on GitHub"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"dvote-rust"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dvote-rust"}},[t._v("#")]),t._v(" DVote Rust")]),t._v(" "),r("p",[t._v("A Rust library that provides fast and performant functions to compute Ethereum wallets, Poseidon hashes, encrypt and decrypt data and generate ZK Proofs on modest hardware. These expensive computations need the lightest implementation possible, and DVote Rust serves exactly this purpose.")]),t._v(" "),r("ul",[r("li",[t._v("See "),r("a",{attrs:{href:"https://github.com/vocdoni/dvote-rs",target:"_blank",rel:"noopener noreferrer"}},[t._v("DVote Rust on GitHub"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"dvote-rust-ffi"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dvote-rust-ffi"}},[t._v("#")]),t._v(" DVote Rust FFI")]),t._v(" "),r("p",[t._v("A library that exports the cryptographic primitives from "),r("a",{attrs:{href:"#dvote-rust"}},[t._v("DVote Rust")]),t._v(" in a C compatible format that can be used with the "),r("em",[t._v("Foreign Function Interface")]),t._v(". It is mostly used by "),r("a",{attrs:{href:"#dvote-flutter-native"}},[t._v("DVote Flutter Native")]),t._v(".")]),t._v(" "),r("ul",[r("li",[t._v("See "),r("a",{attrs:{href:"https://github.com/vocdoni/dvote-rs-ffi",target:"_blank",rel:"noopener noreferrer"}},[t._v("DVote Rust FFI on GitHub"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"dvote-flutter-crypto"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dvote-flutter-crypto"}},[t._v("#")]),t._v(" DVote Flutter Crypto")]),t._v(" "),r("p",[t._v("This library exposes Dart wrappers around "),r("a",{attrs:{href:"#dvote-rust-ffi"}},[t._v("native bindings")]),t._v(" of the cryptographic functions used by the Mobile Client. It bundles Android and iOS libraries and exposes typed Dart functions to invoke them seamlessly.")]),t._v(" "),r("ul",[r("li",[t._v("See "),r("a",{attrs:{href:"https://github.com/vocdoni/dvote-flutter-crypto",target:"_blank",rel:"noopener noreferrer"}},[t._v("DVote Flutter Crypto on GitHub"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"dvote-protobuf"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dvote-protobuf"}},[t._v("#")]),t._v(" DVote Protobuf")]),t._v(" "),r("p",[t._v("This library allows to define data models and store data in an efficient and compact way. Data can be easily serialized and deserialized into Dart, Go, JS, etc, objects.")]),t._v(" "),r("p",[t._v("Protobuf empowers the use of GRPC but the data models are currently used by the Mobile Client.")]),t._v(" "),r("ul",[r("li",[t._v("See "),r("a",{attrs:{href:"https://github.com/vocdoni/dvote-protobuf",target:"_blank",rel:"noopener noreferrer"}},[t._v("DVote Protobuf on GitHub"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"dvote-wasm"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dvote-wasm"}},[t._v("#")]),t._v(" DVote Wasm")]),t._v(" "),r("p",[t._v("This library provides experimental support for the cryptographic primitives available on dvote-rs for NodeJS and web browsers, importing WASM modules.")]),t._v(" "),r("ul",[r("li",[t._v("See "),r("a",{attrs:{href:"https://github.com/vocdoni/dvote-wasm",target:"_blank",rel:"noopener noreferrer"}},[t._v("DVote WASM on GitHub"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"eventual"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#eventual"}},[t._v("#")]),t._v(" Eventual")]),t._v(" "),r("p",[t._v("Eventual is a Flutter package that provides a convenient path toward a Reactive Programming model on Flutter apps. It allows to create value listeners, track progress of their related remote requests and handle errors, all while repainting the UI in a clean and efficient fashion.")]),t._v(" "),r("p",[t._v("A simple and performant alternative to the BLOC pattern or the boilerplate of using Providers.")]),t._v(" "),r("ul",[r("li",[t._v("See "),r("a",{attrs:{href:"https://github.com/vocdoni/eventual",target:"_blank",rel:"noopener noreferrer"}},[t._v("Eventual on GitHub"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=a.exports}}]);