(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{1952:function(e,n){e.exports=function(e){var n=[],a=[],s=function(e){return{className:"string",begin:"~?"+e+".*?"+e}},t=function(e,n,a){return{className:e,begin:n,relevance:a}},i={begin:"\\(",end:"\\)",contains:a,relevance:0};a.push(e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,s("'"),s('"'),e.CSS_NUMBER_MODE,{begin:"(url|data-uri)\\(",starts:{className:"string",end:"[\\)\\n]",excludeEnd:!0}},t("number","#[0-9A-Fa-f]+\\b"),i,t("variable","@@?[\\w-]+",10),t("variable","@{[\\w-]+}"),t("built_in","~?`[^`]*?`"),{className:"attribute",begin:"[\\w-]+\\s*:",end:":",returnBegin:!0,excludeEnd:!0},{className:"meta",begin:"!important"});var r=a.concat({begin:"{",end:"}",contains:n}),c={beginKeywords:"when",endsWithParent:!0,contains:[{beginKeywords:"and not"}].concat(a)},l={begin:"([\\w-]+|@{[\\w-]+})\\s*:",returnBegin:!0,end:"[;}]",relevance:0,contains:[{className:"attribute",begin:"([\\w-]+|@{[\\w-]+})",end:":",excludeEnd:!0,starts:{endsWithParent:!0,illegal:"[<=$]",relevance:0,contains:a}}]},o={className:"keyword",begin:"@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",starts:{end:"[;{}]",returnEnd:!0,contains:a,relevance:0}},d={className:"variable",variants:[{begin:"@[\\w-]+\\s*:",relevance:15},{begin:"@[\\w-]+"}],starts:{end:"[;}]",returnEnd:!0,contains:r}},b={variants:[{begin:"[\\.#:&\\[>]",end:"[;{}]"},{begin:"([\\w-]+|@{[\\w-]+})",end:"{"}],returnBegin:!0,returnEnd:!0,illegal:"[<='$\"]",relevance:0,contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,c,t("keyword","all\\b"),t("variable","@{[\\w-]+}"),t("selector-tag","([\\w-]+|@{[\\w-]+})%?",0),t("selector-id","#([\\w-]+|@{[\\w-]+})"),t("selector-class","\\.([\\w-]+|@{[\\w-]+})",0),t("selector-tag","&",0),{className:"selector-attr",begin:"\\[",end:"\\]"},{className:"selector-pseudo",begin:/:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/},{begin:"\\(",end:"\\)",contains:r},{begin:"!important"}]};return n.push(e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,o,d,l,b),{name:"Less",case_insensitive:!0,illegal:"[=>'/<($\"]",contains:n}}}}]);