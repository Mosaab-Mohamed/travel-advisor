(this["webpackJsonptravel-advisor"]=this["webpackJsonptravel-advisor"]||[]).push([[0],{124:function(e,t,a){},144:function(e,t,a){},149:function(e,t,a){},151:function(e,t,a){},153:function(e,t,a){},154:function(e,t,a){"use strict";a.r(t);var n=a(29),r=a.n(n),c=a(13),s=a(0),i=a.n(s),l=a(2),o=Object(s.createContext)(),d=function(e){var t=e.children,a=Object(s.useState)("hotels"),n=Object(c.a)(a,2),r=n[0],i=n[1],d=Object(s.useState)(2),u=Object(c.a)(d,2),j=u[0],b=u[1],p=Object(s.useState)([]),v=Object(c.a)(p,2),h=v[0],O=v[1],x=Object(s.useState)(!1),m=Object(c.a)(x,2),f=m[0],g=m[1],y=Object(s.useState)(""),N=Object(c.a)(y,2),w=N[0],A=N[1],C=Object(s.useState)({lat:"40.7127281",lng:"-74.0060152"}),P=Object(c.a)(C,2),R=P[0],S=P[1],k=Object(s.useState)([]),B=Object(c.a)(k,2),T=B[0],z=B[1],I=Object(s.useState)(!1),H=Object(c.a)(I,2),V=H[0],E=H[1];return Object(l.jsx)(o.Provider,{value:{type:r,setType:i,rate:j,setRate:b,places:h,setPlaces:O,noPlaces:f,setNoPlaces:g,searchTerm:w,setSearchTerm:A,coords:R,setCoords:S,loading:V,setLoading:E,refsArray:T,setRefsArray:z},children:t})},u=(a(124),a(221)),j=a(222),b=a(224),p=a(223),v=a(20),h=a(102),O=a.n(h),x=a(53),m=a.n(x),f=a(80),g=a(81),y=a.n(g),N=function(){var e=Object(f.a)(m.a.mark((function e(t,a){var n,r,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.lat,r=a.lng,e.prev=1,e.next=4,y.a.get("https://travel-advisor.p.rapidapi.com/".concat(t,"/list-by-latlng"),{params:{latitude:n,longitude:r,limit:"20"},headers:{"x-rapidapi-host":"travel-advisor.p.rapidapi.com","x-rapidapi-key":"b3884ca892msh62ed746224467abp17570ajsn73d259ccfb6d"}});case 4:return c=e.sent,e.abrupt("return",c);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,a){return e.apply(this,arguments)}}(),w=function(){var e=Object(f.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("https://forward-reverse-geocoding.p.rapidapi.com/v1/search",{params:{q:t},headers:{"x-rapidapi-host":"forward-reverse-geocoding.p.rapidapi.com","x-rapidapi-key":"b3884ca892msh62ed746224467abp17570ajsn73d259ccfb6d"}});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=(a(144),function(){var e=Object(s.useContext)(o),t=e.searchTerm,a=e.setSearchTerm,n=e.setCoords,r=function(e){e.preventDefault(),w(t).then((function(e){var t=e.data[0],a=t.lat,r=t.lon;n({lat:a,lng:r})}))};return Object(l.jsx)(u.a,{position:"relative",className:"travelAdvisor-appBar",children:Object(l.jsxs)(j.a,{className:"toolBar",children:[Object(l.jsx)(p.a,{variant:"h5",children:"Travel Advisor"}),Object(l.jsxs)(b.a,{sx:{display:"flex",alignItems:"center"},children:[Object(l.jsx)(p.a,{variant:"subtitle1",children:"Explore new places"}),Object(l.jsxs)("form",{className:"searchBox",onSubmit:r,children:[Object(l.jsx)(O.a,{className:"searchIcon",onClick:r}),Object(l.jsx)(v.c,{className:"searchInput",sx:{color:"white"},onChange:function(e){return a(e.target.value)}})]})]})]})})}),C=a(227),P=a(230),R=a(229),S=a(228),k=a(220),B=a(219),T=a(215),z=a(208),I=a(104),H=a.n(I),V=a(105),E=a.n(V),M=a(106),X=a.n(M),_=(a(149),function(e){var t,a,n,r=e.place,c=e.index,i=Object(s.useContext)(o).refsArray;return Object(l.jsxs)(C.a,{raised:!0,className:"travelAdvisor-card",ref:i[c],children:[Object(l.jsx)(S.a,{component:"img",height:"140",image:(null===r||void 0===r||null===(t=r.photo)||void 0===t?void 0:t.images.original.url)||"https://th.bing.com/th/id/R.8251900044f36cb34db8a9afd01f1348?rik=5o4C0fDfmmlOXg&pid=ImgRaw&r=0",alt:"hotel"}),Object(l.jsxs)(R.a,{children:[Object(l.jsx)(p.a,{variant:"h6",gutterBottom:!0,children:null===r||void 0===r?void 0:r.name}),Object(l.jsxs)(b.a,{className:"placeProp",mb:1,children:[Object(l.jsx)(p.a,{variant:"body2",gutterBottom:!0,children:"Price"}),Object(l.jsx)(p.a,{variant:"body2",children:null===r||void 0===r?void 0:r.price})]}),Object(l.jsxs)(b.a,{className:"placeProp",children:[Object(l.jsx)(p.a,{variant:"body2",gutterBottom:!0,children:"Rating"}),Object(l.jsx)(T.a,{name:"read_only",value:Math.trunc(Number(null===r||void 0===r?void 0:r.rating)),readOnly:!0})]}),Object(l.jsxs)(b.a,{className:"placeProp",mb:2,children:[Object(l.jsx)(p.a,{variant:"body2",gutterBottom:!0,children:"Num Reviews"}),Object(l.jsx)(p.a,{variant:"body2",children:null===r||void 0===r?void 0:r.num_reviews})]}),null===r||void 0===r||null===(a=r.awards)||void 0===a?void 0:a.map((function(e,t){return Object(l.jsxs)(b.a,{className:"placeProp",mb:1,children:[Object(l.jsx)("img",{src:e.images.small,alt:"award"}),Object(l.jsx)(p.a,{variant:"caption",children:e.award_type})]},t)})),Object(l.jsx)(b.a,{mb:2,children:null===r||void 0===r||null===(n=r.cuisin)||void 0===n?void 0:n.map((function(e,t){return Object(l.jsx)(B.a,{children:e.name},t)}))}),Object(l.jsx)(z.a,{mb:2}),(null===r||void 0===r?void 0:r.address)&&Object(l.jsxs)(b.a,{className:"placeProp",my:1,children:[Object(l.jsx)(H.a,{fontSize:"small"}),Object(l.jsx)(p.a,{variant:"subtitle2",children:null===r||void 0===r?void 0:r.address})]}),(null===r||void 0===r?void 0:r.phone)&&Object(l.jsxs)(b.a,{className:"placeProp",my:1,children:[Object(l.jsx)(E.a,{fontSize:"small"}),Object(l.jsx)(p.a,{variant:"subtitle2",children:null===r||void 0===r?void 0:r.phone})]}),(null===r||void 0===r?void 0:r.mail)&&Object(l.jsxs)(b.a,{className:"placeProp",my:1,children:[Object(l.jsx)(X.a,{fontSize:"small"}),Object(l.jsx)(p.a,{variant:"subtitle2",children:null===r||void 0===r?void 0:r.mail})]})]}),Object(l.jsx)(P.a,{children:(null===r||void 0===r?void 0:r.website)&&Object(l.jsx)(k.a,{size:"small",onClick:function(){return window.open(r.website,"_blank")},children:"Website"})})]})}),q=a(212),J=a(216),D=function(){var e=i.a.useContext(o),t=e.type,a=e.setType,n=e.rate,r=e.setRate;return Object(l.jsxs)(b.a,{className:"inputsBox",gutterBottom:!0,children:[Object(l.jsxs)(q.a,{className:"input",select:!0,label:"Type",value:t,onChange:function(e){return a(e.target.value)},variant:"standard",children:[Object(l.jsx)(J.a,{value:"hotels",children:"Hotels"}),Object(l.jsx)(J.a,{value:"restaurants",children:"Restaurants"}),Object(l.jsx)(J.a,{value:"attractions",children:"Attractions"})]}),Object(l.jsxs)(q.a,{className:"input",select:!0,label:"Rate",value:n,onChange:function(e){r(e.target.value)},variant:"standard",children:[Object(l.jsx)(J.a,{value:2,children:"Above 2"}),Object(l.jsx)(J.a,{value:3,children:"Above 3"}),Object(l.jsx)(J.a,{value:4,children:"Above 4"})]})]})},G=a(231),L={position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"},Q=function(){return Object(l.jsx)(b.a,{sx:L,children:Object(l.jsx)(G.a,{size:60})})},U=a(213),Z=(a(151),function(){var e=Object(s.useContext)(o),t=e.type,a=e.rate,n=e.places,r=e.setPlaces,c=e.noPlaces,i=e.setNoPlaces,d=e.coords,u=e.loading,j=e.setLoading,v=e.setRefsArray;return Object(s.useEffect)((function(){j(!0),N(t,d).then((function(e){if(e.data.data.length<1)return i(!0),j(!1),null;r(e.data.data),i(!1),j(!1)}))}),[t,d]),Object(s.useEffect)((function(){var e=Array(n.length).fill().map((function(){return Object(s.createRef)()}));v(e)}),[n]),Object(l.jsxs)(b.a,{className:"travelAdvisor-list",children:[Object(l.jsx)(p.a,{variant:"h6",gutterBottom:!0,children:"Hotels, Restaurants and Attractions"}),Object(l.jsx)(D,{}),u?Object(l.jsx)(Q,{}):c?Object(l.jsx)(U.a,{severity:"info",children:"No Places Found"}):n.filter((function(e){return Math.trunc(Number(e.rating))>a})).map((function(e,t){return Object(l.jsx)(_,{place:e,index:t},t)}))]})}),F=a(211),K=a(225),W=a(226),Y=(a(152),a(153),a(209)),$=a(210),ee=a(28),te=a.n(ee),ae=function(e){var t=e.place,a=e.index,n=Object(s.useContext)(o).refsArray,r=te.a.icon({iconUrl:"https://th.bing.com/th/id/R.e26925b53d06093104f48268ea381cb3?rik=9kZBVdRXKv0NfA&riu=http%3a%2f%2findiafoodprocessingmap.nic.in%2fImages%2fmega.png&ehk=dyydfHcviyQ%2fXX4VZGzCqf9nqGtQnYrRT47%2bofViJVU%3d&risl=&pid=ImgRaw&r=0",iconSize:50,popupAnchor:[0,-25]});return Object(l.jsx)(Y.a,{riseOnHover:"true",position:[t.latitude||"",t.longitude||""],icon:r,eventHandlers:{click:function(){return n[a].current.scrollIntoView({behavior:"smooth"})}},children:Object(l.jsx)($.a,{children:t.name})})},ne=function(){var e=Object(s.useContext)(o),t=e.coords,a=e.places,n=e.rate;return Object(l.jsxs)(F.a,{center:[t.lat,t.lng],zoom:10,className:"tavelAdvisor-map",children:[Object(l.jsx)(K.a,{attribution:'\xa9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(l.jsx)(W.a,{children:function(e){return e.flyTo([t.lat,t.lng],13),null}}),null===a||void 0===a?void 0:a.filter((function(e){return Math.trunc(Number(e.rating))>n})).map((function(e,t){return Object(l.jsx)(ae,{place:e,index:t},t)}))]})},re=a(218),ce=function(){return Object(l.jsxs)(d,{children:[Object(l.jsx)(A,{}),Object(l.jsxs)(re.a,{container:!0,children:[Object(l.jsx)(re.a,{item:!0,xs:12,md:4,children:Object(l.jsx)(Z,{})}),Object(l.jsx)(re.a,{item:!0,xs:12,md:8,children:Object(l.jsx)(ne,{})})]})]})};r.a.render(Object(l.jsx)(ce,{}),document.getElementById("root"))}},[[154,1,2]]]);
//# sourceMappingURL=main.7b6df6fc.chunk.js.map