(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{404:function(t,s,e){"use strict";e.r(s);var a=e(24),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"results-contract"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#results-contract"}},[t._v("#")]),t._v(" Results Contract")]),t._v(" "),e("p",[t._v("Tightly related to the Processes contract and the Genesis one, this contract acts as a registry where Oracles can push the Tally of a vote.")]),t._v(" "),e("p",[t._v("This contract may also evolve in the future to support interesting use cases like the ones enabled by the ERC3000 protocol, Optimistic Rollups, etc.")]),t._v(" "),e("p",[t._v("The instance of the Results contract is resolved from "),e("code",[t._v("results.vocdoni.eth")]),t._v(" on the ENS registry.")]),t._v(" "),e("h3",{attrs:{id:"contract-structs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#contract-structs"}},[t._v("#")]),t._v(" Contract structs")]),t._v(" "),e("div",{staticClass:"language-solidity extra-class"},[e("pre",{pre:!0,attrs:{class:"language-solidity"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ProcessResults")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint32")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" tally"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The tally for every question, option and value")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint32")]),t._v(" height"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The amount of valid envelopes registered")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v(" defined"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mapping")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes32")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" ProcessResults"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("internal")]),t._v(" results"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Mapping of all processes indexed by the Process ID")]),t._v("\n")])])]),e("h3",{attrs:{id:"methods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[t._v("#")]),t._v(" Methods")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("setResults")]),t._v(" Used by Oracles to register the tally of a process. It will also try to update the "),e("code",[t._v("status")]),t._v(" of the process on the Processes contract defined in "),e("code",[t._v("processesAddress")]),t._v(".")]),t._v(" "),e("li",[e("code",[t._v("setProcessesAddress")]),t._v(" Allows the creator to define which Processes contract should be notified about results being available.")])])])}),[],!1,null,null,null);s.default=n.exports}}]);