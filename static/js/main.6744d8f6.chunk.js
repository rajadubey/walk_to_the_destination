(this.webpackJsonpwalk_to_the_destination=this.webpackJsonpwalk_to_the_destination||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){e.exports=n(23)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a,o=n(0),s=n.n(o),i=n(6),r=n.n(i),l=(n(13),n(1)),c=n(2),u=n(4),d=n(3),h=(n(14),n(7)),m=n.n(h),f=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={description:e.getSelectedOptionDescription(e.props.selectedOption,e.props.options)},e.handleHover=function(t){e.setState({description:t.description})},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.options,a=t.selectedOption,o=t.onChanged,i=void 0!==n[0].description,r=i?"30%":"100%",l=this.getSelectedOption(a,n);return s.a.createElement("div",{className:"options-container"},s.a.createElement("div",{className:"option-names-container",style:{width:r}},n.map((function(t){return s.a.createElement("button",{key:t.id,style:{textAlign:i?"right":"center"},className:t.id===a?"active":"",onMouseEnter:function(){return e.handleHover(t)},onMouseLeave:function(){return e.handleHover(l)},onClick:function(){return o(t.id,void 0===t.speed?null:t.speed)}},t.name)}))),i?s.a.createElement("div",{className:"option-description-container",style:{width:"60%",left:r}},this.state.description):null)}},{key:"getSelectedOption",value:function(e,t){return t.filter((function(t){return t.id===e}))[0]}},{key:"getSelectedOptionDescription",value:function(e,t){var n=this.getSelectedOption(e,t);return void 0===n?null:n.description}}]),n}(o.Component),p=function e(t,n){Object(l.a)(this,e),this.x=t,this.y=n},g=function(e,t){return JSON.stringify(e)===JSON.stringify(t)},v=function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,o=[];return e.x>=1&&e.x<=t&&e.y>=1&&e.y+a<=n&&o.push(new p(e.x,e.y+a)),e.x>=1&&e.x+a<=t&&e.y>=1&&e.y<=n&&o.push(new p(e.x+a,e.y)),e.x>=1&&e.x<=t&&e.y-a>=1&&e.y<=n&&o.push(new p(e.x,e.y-a)),e.x-a>=1&&e.x<=t&&e.y>=1&&e.y<=n&&o.push(new p(e.x-a,e.y)),o},w=p,E=function(e,t,n){return 1===e.x||e.x===t||1===e.y||e.y===n},y=function(e,t,n,a){for(var o=[],s=1;s<=e;s++)o.push(new w(s,1)),o.push(new w(s,t));for(var i=2;i<t;i++)o.push(new w(1,i)),o.push(new w(e,i));for(var r=3;r<e-1;r+=2)for(var l=3;l<t-1;l+=2)o.push(new w(r,l)),Math.round(Math.random())?o.push(new w(r-1,l)):o.push(new w(r,l-1));var c=E(n)?v(n,e,t):[],u=E(a)?v(a,e,t):[];return o.filter((function(o){return!g(o,n)&&!g(o,a)&&(o.y!==t-1||1===o.x||o.x===e)&&!c.some((function(e){return g(e,o)}))&&!u.some((function(e){return g(e,o)}))}))},S=[],b=[],N=function(e,t,n){return 1===e.x||e.x===t||1===e.y||e.y===n},O=function e(t,n,a){S.push(t);var o=v(t,n,a,2).filter((function(e){return!S.some((function(t){return g(t,e)}))&&!b.some((function(t){return g(t,e)}))}));!function(e,t,n,a){t.forEach((function(t){var n=new w(e.x,e.y);t.x===e.x?t.y>e.y?n.y++:n.y--:t.x>e.x?n.x++:n.x--,b.push(t),S.push(n)}))}(t,o);for(var s=function(){var t=o[Math.floor(Math.random()*o.length)];e(t,n,a),o=o.filter((function(e){return!g(e,t)}))};o.length>0;)s()},I=function(e,t,n,a){for(var o=1;o<=e;o++)S.push(new w(o,1)),S.push(new w(o,t));for(var s=2;s<t;s++)S.push(new w(1,s)),S.push(new w(e,s));O(new w(3,3),e,t);var i=N(n)?v(n,e,t):[],r=N(a)?v(a,e,t):[];return S.filter((function(o){return!g(o,n)&&!g(o,a)&&(o.y!==t-1||1===o.x||o.x===e)&&!i.some((function(e){return g(e,o)}))&&!r.some((function(e){return g(e,o)}))}))},k=[],x=[],_=function(e,t,n){return 1===e.x||e.x===t||1===e.y||e.y===n},M=function(e,t,n,o){k.length=0,x.length=0,window.rows=e,window.columns=t,a=Math.random()>=.5;for(var s=1;s<=e;s++)k.push(new w(s,1)),k.push(new w(s,t));for(var i=2;i<t;i++)k.push(new w(1,i)),k.push(new w(e,i));!function e(t,n,o,s){if(a=!a){var i=function(){if(o>=s)return{v:void 0};var a=2*(Math.floor(Math.random()*(s-o)/2)+o/2)+1,i=Math.floor(Math.random()*(n-t+1))+t;v(new w(i,a),window.rows,window.columns).filter((function(e){return e.x===i})).map((function(e){return x.push(e)}));for(var r=function(e){if(e===i||x.some((function(t){return g(t,new w(e,a))})))return"continue";k.push(new w(e,a))},l=t;l<=n;l++)r(l);e(t,n,o,a-1),e(t,n,a+1,s)}();if("object"===typeof i)return i.v}else{var r=function(){if(t>=n)return{v:void 0};var a=2*(Math.floor(Math.random()*(n-t)/2)+t/2)+1,i=Math.floor(Math.random()*(s-o+1))+o;v(new w(a,i),window.rows,window.columns).filter((function(e){return e.y===i})).map((function(e){return x.push(e)}));for(var r=function(e){if(e===i||x.some((function(t){return g(t,new w(a,e))})))return"continue";k.push(new w(a,e))},l=o;l<=s;l++)r(l);e(t,a-1,o,s),e(a+1,n,o,s)}();if("object"===typeof r)return r.v}}(2,e-1,2,t-1);var r=_(n)?v(n,e,t):[],l=_(o)?v(o,e,t):[];return k.filter((function(a){return!g(a,n)&&!g(a,o)&&(a.y!==t-1||1===a.x||a.x===e)&&!r.some((function(e){return g(e,a)}))&&!l.some((function(e){return g(e,a)}))}))},D=[],L=function(e,t,n){return 1===e.x||e.x===t||1===e.y||e.y===n},T=function(e,t,n,a){for(var o=1;o<=e;o++)D.push(new w(o,1)),D.push(new w(o,t));for(var s=2;s<t;s++)D.push(new w(1,s)),D.push(new w(e,s));!function(e,t){for(var n=3;n<e-1;n++)for(var a=3;a<t-1;a++)Math.random()>=.8&&D.push(new w(n,a))}(e,t),D.sort((function(){return.5-Math.random()}));var i=L(n)?v(n,e,t):[],r=L(a)?v(a,e,t):[];return D.filter((function(o){return!g(o,n)&&!g(o,a)&&(o.y!==t-1||1===o.x||o.x===e)&&!i.some((function(e){return g(e,o)}))&&!r.some((function(e){return g(e,o)}))}))},A=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={algorithms:[{id:"algo-dijkstra",name:"Dijkstra's",description:s.a.createElement("div",null,s.a.createElement("p",null,"Let the node at which we are starting be called the",s.a.createElement("b",null,"initial node"),". Let the",s.a.createElement("b",null,"distance of node",s.a.createElement("i",null,"Y")),"be the distance from the ",s.a.createElement("b",null," initial node"),"to",s.a.createElement("i",null,"Y"),". Dijkstra's algorithm will assign some initial distance values and will try to improve them step by step."),s.a.createElement("ol",null,s.a.createElement("li",null,"Mark all nodes unvisited. Create a set of all the unvisited nodes called the",s.a.createElement("i",null,"unvisited set"),"."),s.a.createElement("li",null,"Assign to every node a tentative distance value: set it to zero for our initial node and to infinity for all other nodes. Set the initial node as current."),s.a.createElement("li",null,"For the current node, consider all of its unvisited neighbours and calculate their",s.a.createElement("i",null,"tentative"),"distances through the current node. Compare the newly calculated",s.a.createElement("i",null,"tentative"),"distance to the current assigned value and assign the smaller one. For example, if the current node",s.a.createElement("i",null,"A"),"is marked with a distance of 6, and the edge connecting it with a neighbour",s.a.createElement("i",null,"B"),"has length 2, then the distance to",s.a.createElement("i",null,"B"),"through",s.a.createElement("i",null,"A"),"will be 6 + 2 = 8. If B was previously marked with a distance greater than 8 then change it to 8. Otherwise, the current value will be kept."),s.a.createElement("li",null,"When we are done considering all of the unvisited neighbours of the current node, mark the current node as visited and remove it from the",s.a.createElement("i",null,"unvisited set"),". A visited node will never be checked again."),s.a.createElement("li",null,"If the destination node has been marked visited (when planning a route between two specific nodes) or if the smallest tentative distance among the nodes in the",s.a.createElement("i",null,"unvisited set"),"is infinity (when planning a complete traversal; occurs when there is no connection between the initial node and remaining unvisited nodes), then stop. The algorithm has finished."),s.a.createElement("li",null,'Otherwise, select the unvisited node that is marked with the smallest tentative distance, set it as the new "current node", and go back to step 3.')),s.a.createElement("p",null,'When planning a route, it is actually not necessary to wait until the destination node is "visited" as above: the algorithm can stop once the destination node has the smallest tentative distance among all "unvisited" nodes (and thus could be selected as the next "current").'))},{id:"algo-a*",name:"A*",description:s.a.createElement("div",null,s.a.createElement("p",null,"We create two lists \u2013 ",s.a.createElement("i",null,"Open List")," and"," ",s.a.createElement("i",null,"Closed List"),"(just like Dijkstra Algorithm)"),s.a.createElement("p",null,"1. Initialize the open list",s.a.createElement("br",null),"2. Initialize the closed list put the starting node on the open list (you can leave its"," ",s.a.createElement("strong",null,"f")," at zero)",s.a.createElement("br",null),"3. while the open list is not empty ",s.a.createElement("br",null),"a. find the node with the least ",s.a.createElement("strong",null,"f")," ",'on the open list, call it "q" ',s.a.createElement("br",null),"b. pop q off the open list ",s.a.createElement("br",null),"c. generate q's 8 successors and set their parents to q ",s.a.createElement("br",null),"d. for each successor ",s.a.createElement("br",null),"i. if successor is the goal, stop search successor.",s.a.createElement("strong",null,"g")," = q.",s.a.createElement("strong",null,"g")," + distance between successor and q successor.",s.a.createElement("strong",null,"h")," ","= distance from goal to successor (This can be done using many ways, we will discuss three heuristics- Manhattan, Diagonal and Euclidean Heuristics) successor.",s.a.createElement("strong",null,"f")," = successor.",s.a.createElement("strong",null,"g")," + successor.",s.a.createElement("strong",null,"h"),s.a.createElement("br",null),"ii. if a node with the same position as successor is in the OPEN list which has a lower"," ",s.a.createElement("strong",null,"f")," than successor, skip this successor ",s.a.createElement("br",null),"iii. if a node with the same position as successor is in the CLOSED list which has a lower"," ",s.a.createElement("strong",null,"f")," than successor, skip this successor otherwise, add the node to the open list end (for loop) e. push q on the closed list end (while loop)"," "))},{id:"algo-greedy",name:"Greedy",description:s.a.createElement("div",null,s.a.createElement("p",null,"A",s.a.createElement("b",null,"greedy algorithm"),"is any algorithm that follows the problem-solving heuristic of making the locally optimal choice at each stage. In many problems, a greedy strategy does not usually produce an optimal solution, but nonetheless a greedy heuristic may yield locally optimal solutions that approximate a globally optimal solution in a reasonable amount of time."),s.a.createElement("p",null,"For example, a greedy strategy for the",s.a.createElement("a",{href:"/wiki/Travelling_salesman_problem",title:"Travelling salesman problem"},"travelling salesman problem"),'(which is of a high computational complexity) is the following heuristic: "At each step of the journey, visit the nearest unvisited city." This heuristic does not intend to find a best solution, but it terminates in a reasonable number of steps; finding an optimal solution to such a complex problem typically requires unreasonably many steps. In mathematical optimization, greedy algorithms optimally solve combinatorial problems having the properties of',s.a.createElement("a",{href:"/wiki/Matroid",title:"Matroid"},"matroids"),", and give constant-factor approximations to optimization problems with submodular structure."))},{id:"algo-bfs",name:"Breadth-First-Search",description:s.a.createElement("div",null,s.a.createElement("p",null,"Visit all the siblings before exploring the children"))},{id:"algo-dfs",name:"Depth-First-Search",description:s.a.createElement("div",null,s.a.createElement("p",null,"Visit all the children before exploring the siblings"))}],mazes:[{id:"maze-none",name:"Create"},{id:"maze-binary-tree",name:"Binary Tree"},{id:"maze-dfs",name:"Depth First Search"},{id:"maze-recursive-division",name:"Recursive Division"},{id:"maze-random",name:"Random Maze"}],speeds:[{id:"speed-faster",name:"Faster",speed:10},{id:"speed-fast",name:"Fast",speed:15},{id:"speed-normal",name:"Normal",speed:20},{id:"speed-slow",name:"Slow",speed:30},{id:"speed-slower",name:"Slower",speed:40}],selectedMazeId:"maze-none"},e.constructMaze=function(t){for(var n=function(n){var a=t[n];setTimeout((function(){var o=document.querySelector("#node-".concat(a.x,"-").concat(a.y));o.classList.remove("node-unvisited"),o.classList.add("node-wall"),n===t.length-1&&setTimeout((function(){e.props.stopLoading(),e.props.onMazeCreated(t,[])}),e.props.speed)}),e.props.speed*n/2)},a=0;a<t.length;a++)n(a)},e.getSelectedMazeFunction=function(e){switch(e){case"maze-binary-tree":return y;case"maze-dfs":return I;case"maze-recursive-division":return M;case"maze-random":return T;case"maze-none":return-1;default:return null}},e.setMazeId=function(t){var n=e.getSelectedMazeFunction(t);if(null!==n){if(document.querySelector(".maze-options-container").classList.remove("show"),e.props.resetMesh(),e.setState({selectedMazeId:t}),-1!==n){e.props.startLoading(),console.log("Generate Maze : ",t);var a=n(e.props.rows,e.props.columns,e.props.source,e.props.target);e.constructMaze(a)}}else alert("Coming Soon !!!")},e}return Object(c.a)(n,[{key:"showAlgorithmOptionsContainer",value:function(){document.querySelector(".algorithm-options-container").classList.add("show")}},{key:"showMazeOptionsContainer",value:function(){document.querySelector(".maze-options-container").classList.add("show")}},{key:"showSpeedOptionsContainer",value:function(){document.querySelector(".speed-options-container").classList.add("show")}},{key:"getSelectedAlgorithm",value:function(e){return this.state.algorithms.filter((function(t){return t.id===e}))[0]}},{key:"getSelectedMaze",value:function(e){return this.state.mazes.filter((function(t){return t.id===e}))[0]}},{key:"getSelectedSpeed",value:function(e){return this.state.speeds.filter((function(t){return t.id===e}))[0]}},{key:"render",value:function(){var e=this.props,t=e.selectedAlgorithmId,n=e.selectedSpeedId,a=e.onAlgorithmChanged,o=e.onSpeedChanged,i=e.startWalking,r=e.clearPath,l=e.destructWalls,c=e.resetMesh;return s.a.createElement(s.a.Fragment,null,s.a.createElement("nav",{className:"navbar-custom"},s.a.createElement("span",{className:"brand"},s.a.createElement("img",{src:m.a,width:"30",height:"30",className:"d-inline-block align-top",alt:"logo"}),s.a.createElement("span",{className:"my-auto"},"Walk to the Destination")),s.a.createElement("div",{className:"actions-container"},s.a.createElement("button",{id:"btn-clear-path",onClick:function(){return r()}},s.a.createElement("span",null,"Clear Path"),s.a.createElement("i",{className:"fas fa-eraser"})),s.a.createElement("button",{id:"btn-desctruct-walls",onClick:function(){return l()}},s.a.createElement("span",null,"Destruct Walls"),s.a.createElement("i",{className:"fas fa-snowplow"})),s.a.createElement("button",{id:"btn-reset-mesh",onClick:function(){return c()}},s.a.createElement("span",null,"Reset Mesh"),s.a.createElement("i",{className:"fas fa-trash-restore"})),s.a.createElement("button",{id:"btn-start-walking",onClick:function(){return i()}},s.a.createElement("span",null,"Start Walking"),s.a.createElement("i",{className:"fas fa-play-circle"}))),s.a.createElement("div",{className:"walking-options"},s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement("button",{className:"btn-algorithm",onClick:this.showAlgorithmOptionsContainer},s.a.createElement("span",null,this.getSelectedAlgorithm(t).name)," ","Algorithm",s.a.createElement("i",{className:"fas fa-check-double ml-1"}))),s.a.createElement("li",null,s.a.createElement("button",{className:"btn-maze",onClick:this.showMazeOptionsContainer},s.a.createElement("span",null,this.getSelectedMaze(this.state.selectedMazeId).name)," ","Maze",s.a.createElement("i",{className:"fab fa-magento ml-1"}))),s.a.createElement("li",null,s.a.createElement("button",{className:"btn-speed",onClick:this.showSpeedOptionsContainer},"Speed :"," ",s.a.createElement("span",null,this.getSelectedSpeed(n).name)," ",s.a.createElement("i",{className:"fas fa-tachometer-alt"})))))),s.a.createElement("div",{className:"algorithm-options-container"},s.a.createElement(f,{options:this.state.algorithms,selectedOption:t,onChanged:a})),s.a.createElement("div",{className:"maze-options-container"},s.a.createElement(f,{options:this.state.mazes,selectedOption:this.state.selectedMazeId,onChanged:this.setMazeId})),s.a.createElement("div",{className:"speed-options-container"},s.a.createElement(f,{options:this.state.speeds,selectedOption:n,onChanged:o})))}}]),n}(o.Component),C=(n(15),n(16),{NODE_UNVISITED:0,NODE_VISITED:1,NODE_IS_WALL:-1,NODE_IS_SOURCE:10,NODE_IS_TARGET:100,NODE_FALLS_IN_PATH:50,NODE_IS_VISITING:2}),z=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props,t=e.nodeState,n=e.position,a=e.onMouseDown,o=e.onMouseUp,i=e.onMouseEnter,r=e.onMouseLeave;return void 0===i?s.a.createElement("div",{className:this.getNodeStateClass(t)}):s.a.createElement("div",{className:this.getNodeStateClass(t),id:"node-".concat(n.x,"-").concat(n.y),"data-x":n.x,"data-y":n.y,onMouseDown:function(){return a(t,n)},onMouseUp:function(){return o(t,n)},onMouseEnter:function(){return i(t,n)},onMouseLeave:function(){return r(t,n)}})}},{key:"getNodeStateClass",value:function(e){var t="node node-";switch(e){case C.NODE_UNVISITED:t+="unvisited";break;case C.NODE_VISITED:t+="visited";break;case C.NODE_IS_WALL:t+="wall";break;case C.NODE_IS_SOURCE:t+="source";break;case C.NODE_IS_TARGET:t+="target";break;default:t+="unvisited"}return t}}]),n}(o.Component),j=function(){return s.a.createElement("section",{className:"legend-container"},s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement("div",null,s.a.createElement(z,{nodeState:C.NODE_UNVISITED,position:new w(-1,-1),disabled:!0}),s.a.createElement("span",{className:"ml-1"},"Unvisited"))),s.a.createElement("li",null,s.a.createElement("div",null,s.a.createElement(z,{nodeState:C.NODE_VISITED,position:new w(-1,-1)}),s.a.createElement("span",{className:"ml-1"},"Visited"))),s.a.createElement("li",null,s.a.createElement("div",null,s.a.createElement(z,{nodeState:C.NODE_IS_WALL,position:new w(-1,-1)}),s.a.createElement("span",{className:"ml-1"},"Wall"))),s.a.createElement("li",null,s.a.createElement("div",null,s.a.createElement(z,{nodeState:C.NODE_IS_SOURCE,position:new w(-1,-1)}),s.a.createElement("span",{className:"ml-1"},"Source"))),s.a.createElement("li",null,s.a.createElement("div",null,s.a.createElement(z,{nodeState:C.NODE_IS_TARGET,position:new w(-1,-1)}),s.a.createElement("span",{className:"ml-1"},"Target")))))},W=(n(17),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={isMousePressed:!1,movingSource:!1,movingTarget:!1},e}return Object(c.a)(n,[{key:"handleMouseUp",value:function(e,t){this.setState({isMousePressed:!1}),e===C.NODE_IS_SOURCE?this.setState({movingSource:!1}):e===C.NODE_IS_TARGET&&this.setState({movingTarget:!1})}},{key:"handleMouseDown",value:function(e,t){this.setState({isMousePressed:!0}),e===C.NODE_IS_SOURCE?this.setState({movingSource:!0}):e===C.NODE_IS_TARGET?this.setState({movingTarget:!0}):this.props.toggleWall(t)}},{key:"handleMouseEnter",value:function(e,t){this.state.isMousePressed&&(this.state.movingSource?this.props.setNodeAsSource(t):this.state.movingTarget?this.props.setNodeAsTarget(t):this.props.toggleWall(t))}},{key:"handleMouseLeave",value:function(e,t){}},{key:"decideNodeState",value:function(e,t,n,a,o,s){return e===n.x&&t===n.y?C.NODE_IS_SOURCE:e===a.x&&t===a.y?C.NODE_IS_TARGET:o.some((function(n){return n.x===e&&n.y===t}))?C.NODE_IS_WALL:s.some((function(n){return n.x===e&&n.y===t}))?C.NODE_VISITED:C.NODE_UNVISITED}},{key:"render",value:function(){for(var e=this,t=this.props,n=t.rows,a=t.columns,o=t.source,i=t.target,r=t.walls,l=t.visitedNodes,c=(window.innerWidth-20*a)/2,u=(window.innerHeight-190-20*n)/2,d=[],h=1;h<=n;h++)for(var m=1;m<=a;m++){var f="node-"+h+"-"+m,p=this.decideNodeState(h,m,o,i,r,l);d.push(s.a.createElement(z,{key:f,position:new w(h,m),id:f,nodeState:p,onMouseDown:function(t,n){return e.handleMouseDown(t,n)},onMouseUp:function(t,n){return e.handleMouseUp(t,n)},onMouseEnter:function(t,n){return e.handleMouseEnter(t,n)},onMouseLeave:function(t,n){return e.handleMouseLeave(t,n)}}))}return s.a.createElement("section",{className:"grid-container",style:{paddingTop:u,paddingRight:c,paddingBottom:u,paddingLeft:c}},d)}}]),n}(o.Component)),R=(n(18),function(e){var t=e.insights;return s.a.createElement("section",{className:"insights-container"},s.a.createElement("div",null,s.a.createElement("p",null,t)))}),q=(n(19),function(){return s.a.createElement("section",{className:"copyright-container"},s.a.createElement("div",{className:"github-links"},s.a.createElement("a",{href:"https://github.com/shantanu0323"},s.a.createElement("i",{className:"fab fa-github-square"}))),s.a.createElement("div",{className:"copyright"},"Made with ",s.a.createElement("i",{className:"fas fa-heart text-danger"})," by"," ",s.a.createElement("a",{href:"https://shantanu0323.github.io"},"Shantanu Pramanik")),s.a.createElement("div",{className:"social-links"},s.a.createElement("a",{href:"https://www.linkedin.com/in/shantanu-pramanik/"},s.a.createElement("i",{className:"fab fa-linkedin"})),s.a.createElement("a",{href:"https://www.facebook.com/shantanu.pramanik1"},s.a.createElement("i",{className:"fab fa-facebook-square"})),s.a.createElement("a",{href:"https://www.twitter.com/shantanu0323/"},s.a.createElement("i",{className:"fab fa-twitter-square"})),s.a.createElement("a",{href:"https://www.instagram.com/shantanu0323/"},s.a.createElement("i",{className:"fab fa-instagram-square"}))))}),U=(n(20),n(21),function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1/0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:C.NODE_UNVISITED;Object(l.a)(this,e),this.position=t,this.distance=n,this.nodeState=a}),P=[],V=[],F=function(e){var t=v(e.position,window.rows,window.columns),n=[];return t.map((function(e){var t=P[e.x][e.y];return t.nodeState!==C.NODE_IS_WALL&&(n.push(t),!0)})),n},G=function(e){for(var t,n=F(e).filter((function(e){return P[e.position.x][e.position.y].nodeState===C.NODE_VISITED})),a=1/0,o=0;o<n.length;o++){var s=n[o];s.distance<a&&(a=s.distance,t=s)}return t},B=function(e,t,n,a,o){!function(e,t,n,a,o){window.rows=e,window.columns=t,P.length=0,V.length=0;for(var s=1;s<=window.rows;s++){for(var i=[],r=1;r<=window.columns;r++){var l=new U(new w(s,r));g(l.position,n)?(l.nodeState=C.NODE_IS_SOURCE,l.distance=0):g(l.position,a)&&(l.nodeState=C.NODE_IS_TARGET),V.push(l),i[r]=l}P[s]=i}o.forEach((function(e){P[e.x][e.y].nodeState=C.NODE_IS_WALL}))}(e,t,n,a,o);var s=function(e){for(var t=[],n=function(){for(var n=1/0,a=void 0,o=0;o<V.length;o++)V[o].distance<n&&(n=V[o].distance,a=V[o]);return void 0===a?(console.log("Target NOT Reachable"),"break"):(t.push(a),V=V.filter((function(e){return!g(e.position,a.position)})),g(a.position,e)?(console.log("TARGET REACHED"),"break"):(a.nodeState=a.nodeState===C.NODE_IS_SOURCE?C.NODE_IS_SOURCE:C.NODE_VISITED,void F(a).forEach((function(e){var t=a.distance+1;e.distance=t<e.distance?t:e.distance}))))};V.length>0;){if("break"===n())break}return t}(a),i=function(e){for(var t=[],n=e[e.length-1];n.distance>1;)n=G(n),t.unshift(n);return t}(s),r=[],l=[];return s.map((function(e){return r.push(e.position)})),i.map((function(e){return l.push(e.position)})),{visitedNodes:r,path:l}},H=function(){var e=document.querySelector(".node.node-source");e.classList.remove("path-to-top"),e.classList.remove("path-to-right"),e.classList.remove("path-to-bottom"),e.classList.remove("path-to-left");var t=document.querySelector(".node.node-target");t.classList.remove("path-to-top"),t.classList.remove("path-to-right"),t.classList.remove("path-to-bottom"),t.classList.remove("path-to-left")},J=(n(22),function(e){var t=e.loading?"loader-container show":"loader-container hide";return s.a.createElement("div",{className:t},s.a.createElement("div",{className:"top-bar"}),s.a.createElement("div",{className:"right-bar"}),s.a.createElement("div",{className:"bottom-bar"}),s.a.createElement("div",{className:"left-bar"}))}),Y=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:C.NODE_UNVISITED;Object(l.a)(this,e),this.position=t,this.parent=null,this.f=1/0,this.g=1/0,this.h=1/0,this.nodeState=n},K=[],$=[],Q=function(e,t){return Math.abs(e.x-t.x)+Math.abs(e.y-t.y)},X=function(e,t,n,a,o){!function(e,t,n,a,o){K.length=0,$.length=0,window.rows=e,window.columns=t;var s=new Y(n,C.NODE_IS_SOURCE);s.g=0,s.h=Q(n,a),s.f=s.h,K.push(s)}(e,t,n,a);for(var s=function(){var e=(K.sort((function(e,t){return e.f===t.f?e.h>t.h:e.f>t.f})),K[0]);if(K.shift(),$.push(e),g(e.position,a))return"break";(function(e,t){var n=v(e,window.rows,window.columns),a=[];return n.filter((function(e){return!(t.some((function(t){return g(t,e)}))||$.some((function(t){return g(t.position,e)})))})).map((function(e){return a.push(new Y(new w(e.x,e.y))),!0})),a})(e.position,o).map((function(t){t.g=e.g+Q(t.position,e.position),t.h=Q(t.position,a),t.f=t.g+t.h,t.parent=e;for(var n=!1,o=0;o<K.length;o++)if(g(K[o].position,t.position)&&t.f<K[o].f){K[o]=t,n=!0;break}return n||K.push(t),!0}))};K.length>0&&$.length<e*t-o.length;){if("break"===s())break}var i=[];$.filter((function(e){return e.nodeState!==C.NODE_IS_SOURCE&&e.nodeState!==C.NODE_IS_TARGET})).map((function(e){return i.push(e.position)}));for(var r=[],l=$[$.length-1];null!==l;)g(l.position,n)||g(l.position,a)||r.unshift(l.position),l=l.parent;return{visitedNodes:i,path:r}},Z=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:C.NODE_UNVISITED;Object(l.a)(this,e),this.position=t,this.parent=null,this.f=1/0,this.nodeState=n},ee=[],te=[],ne=function(e,t){return Math.abs(e.x-t.x)+Math.abs(e.y-t.y)},ae=function(e,t,n,a,o){!function(e,t,n,a,o){ee.length=0,te.length=0,window.rows=e,window.columns=t;var s=new Z(n,C.NODE_IS_SOURCE);s.f=ne(n,a),ee.push(s)}(e,t,n,a);for(var s=function(){var e=(ee.sort((function(e,t){return e.f>t.f})),ee[0]);if(ee.shift(),te.push(e),g(e.position,a))return"break";(function(e,t){var n=v(e,window.rows,window.columns),a=[];return n.filter((function(e){return!(t.some((function(t){return g(t,e)}))||te.some((function(t){return g(t.position,e)})))})).map((function(e){return a.push(new Z(new w(e.x,e.y))),!0})),a})(e.position,o).map((function(t){t.f=ne(t.position,a),t.parent=e;for(var n=!1,o=0;o<ee.length;o++)if(g(ee[o].position,t.position)&&t.f<ee[o].f){ee[o]=t,n=!0;break}return n||ee.push(t),!0}))};ee.length>0&&te.length<e*t-o.length;){if("break"===s())break}var i=[];te.filter((function(e){return e.nodeState!==C.NODE_IS_SOURCE&&e.nodeState!==C.NODE_IS_TARGET})).map((function(e){return i.push(e.position)}));for(var r=[],l=te[te.length-1];null!==l;)g(l.position,n)||g(l.position,a)||r.unshift(l.position),l=l.parent;return{visitedNodes:i,path:r}},oe=[],se=[],ie={},re=function(e){return"node-".concat(e.x,"-").concat(e.y)},le=function(e,t){var n=v(e,window.rows,window.columns),a=[];return n.filter((function(e){return!t.some((function(t){return g(t,e)}))&&!se.some((function(t){return g(t,e)}))&&!oe.some((function(t){return g(t,e)}))&&!g(e,window.source)})).map((function(t){return ie[re(t)]=e,a.push(t),!0})),a},ce=function(e,t,n,a,o){!function(e,t,n,a,o){window.rows=e,window.columns=t,window.source=n,window.target=a,oe.length=0,se.length=0,se.push(n),ie[re(n)]=null}(e,t,n,a),function(e,t){for(;se.length>0;){var n=se[0];if(oe.push(n),g(n,e))return;se.shift(),le(n,t).map((function(e){return se.push(e)}))}}(a,o);var s=function(){var e=[],t=window.target;if(!g(oe[oe.length-1],t))return[];for(;null!==ie[re(t)];)e.unshift(ie[re(t)]),t=ie[re(t)];return e.shift(),e}();return{visitedNodes:oe,path:s}},ue=[],de={},he=!1,me=function(e){return"node-".concat(e.x,"-").concat(e.y)},fe=function e(t,n){if(!he){if(g(t,window.target))return ue.push(t),void(he=!0);ue.push(t);for(var a=function(e,t){var n=v(e,window.rows,window.columns),a=[];return n.filter((function(e){return!t.some((function(t){return g(t,e)}))&&!ue.some((function(t){return g(t,e)}))&&!g(e,window.source)})).map((function(t){return de[me(t)]=e,a.push(t),!0})),a}(t,n);a.length>0&&!he;)e(a[0],n),a.shift()}},pe=function(e,t,n,a,o){!function(e,t,n,a){window.rows=e,window.columns=t,window.source=n,window.target=a,ue.length=0,he=!1,(de={})[me(n)]=null}(e,t,n,a),fe(n,o);var s=function(){var e=[],t=window.target;if(!g(ue[ue.length-1],t))return[];for(;null!==de[me(t)];)e.unshift(de[me(t)]),t=de[me(t)];return e.shift(),e}();return{visitedNodes:ue,path:s}},ge=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={selectedAlgorithmId:"algo-dijkstra",selectedSpeedId:"speed-fast",speed:15,rows:0,columns:0,source:new w(-1,-1),target:new w(-1,-1),walls:[],visitedNodes:[],loading:!1},e.startLoading=function(){e.setState({loading:!0})},e.stopLoading=function(){e.setState({loading:!1})},e.setAlgorithmId=function(t){e.setState({selectedAlgorithmId:t}),document.querySelector(".algorithm-options-container").classList.remove("show")},e.setSpeedId=function(t,n){e.setState({selectedSpeedId:t,speed:n}),document.querySelector(".speed-options-container").classList.remove("show")},e.setNodeAsSource=function(t){if(t.x!==e.state.target.x||t.y!==e.state.target.y){var n=e.state.walls;n.some((function(e){return e.x===t.x&&e.y===t.y}))&&(n=e.state.walls.filter((function(e){return!(e.x===t.x&&e.y===t.y)}))),e.setState({source:t,walls:n})}},e.setNodeAsTarget=function(t){if(t.x!==e.state.source.x||t.y!==e.state.source.y){var n=e.state.walls;n.some((function(e){return e.x===t.x&&e.y===t.y}))&&(n=e.state.walls.filter((function(e){return!(e.x===t.x&&e.y===t.y)}))),e.setState({target:t,walls:n})}},e.toggleWall=function(t){var n=e.state.walls;n.some((function(e){return e.x===t.x&&e.y===t.y}))?n=n.filter((function(e){return!(e.x===t.x&&e.y===t.y)})):n.push(t),e.setState({walls:n})},e.putNodeInPath=function(e,t){return g(e,new w(t.x-1,t.y))?"top":g(e,new w(t.x,t.y+1))?"right":g(e,new w(t.x+1,t.y))?"bottom":g(e,new w(t.x,t.y-1))?"left":"null"},e.clearPath=function(){e.setState({visitedNodes:[]});for(var t=1;t<=e.state.rows;t++)for(var n=1;n<=e.state.columns;n++){var a=document.querySelector("#node-".concat(t,"-").concat(n));(a.classList.contains("node-visited")||a.classList.contains("node-path"))&&(a.classList.remove("node-visited"),a.classList.remove("node-path"),a.classList.add("node-unvisited"))}H()},e.destructWalls=function(){e.setState({walls:[]})},e.resetMesh=function(){e.clearPath(),e.destructWalls()},e.getSelectedAlgorithmFunction=function(){switch(e.state.selectedAlgorithmId){case"algo-dijkstra":return B;case"algo-a*":return X;case"algo-greedy":return ae;case"algo-bfs":return ce;case"algo-dfs":return pe;default:return null}},e.startWalking=function(){setTimeout((function(){console.log("START WALKING");var t=e.getSelectedAlgorithmFunction();if(null!==t){e.startLoading(),H(),e.clearPath();for(var n=t(e.state.rows,e.state.columns,e.state.source,e.state.target,e.state.walls),a=n.visitedNodes,o=n.path,s=function(t){setTimeout((function(){var n=document.querySelector("#node-".concat(a[t].x,"-").concat(a[t].y));n.classList.contains("node-unvisited")&&(n.classList.remove("node-unvisited"),n.classList.add("node-visited")),t===a.length-1&&setTimeout((function(){if(a[t].x===e.state.target.x&&a[t].y===e.state.target.y){document.querySelector(".node.node-source").classList.add("path-to-".concat(e.putNodeInPath(o[0],e.state.source)));for(var n=function(t){setTimeout((function(){var n=o[t],a=document.querySelector("#node-".concat(n.x,"-").concat(n.y));a.classList.remove("node-visited"),a.classList.add("node-path"),t===o.length-1&&(document.querySelector(".node.node-target").classList.add("path-to-".concat(e.putNodeInPath(o[o.length-1],e.state.target))),e.stopLoading())}),e.state.speed*t*2)},s=0;s<o.length;s++)n(s)}else alert("Target NOT Reachable"),e.stopLoading()}),e.state.speed+500)}),e.state.speed*t)},i=0;i<a.length;i++)s(i)}else alert("Coming Soon !!!")}),500)},e.updateMaze=function(t,n){e.setState({walls:t,visitedNodes:n})},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.crossOrigin="anonymous",e.src="https://kit.fontawesome.com/f7fe82406d.js",document.body.appendChild(e);var t=window.innerHeight-190,n=window.innerWidth,a=parseInt((t-40)/20),o=parseInt((n-40)/20),s=new w(parseInt(.5*a),parseInt(.3*o)),i=new w(parseInt(.5*a),parseInt(.7*o));this.setState({rows:a,columns:o,source:s,target:i})}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(J,{loading:this.state.loading}),s.a.createElement(A,{selectedAlgorithmId:this.state.selectedAlgorithmId,selectedSpeedId:this.state.selectedSpeedId,onAlgorithmChanged:this.setAlgorithmId,onSpeedChanged:this.setSpeedId,startWalking:this.startWalking,clearPath:this.clearPath,destructWalls:this.destructWalls,resetMesh:this.resetMesh,rows:this.state.rows,columns:this.state.columns,source:this.state.source,target:this.state.target,speed:this.state.speed,onMazeCreated:this.updateMaze,startLoading:this.startLoading,stopLoading:this.stopLoading}),s.a.createElement(W,{rows:this.state.rows,columns:this.state.columns,source:this.state.source,target:this.state.target,walls:this.state.walls,visitedNodes:this.state.visitedNodes,setNodeAsSource:this.setNodeAsSource,setNodeAsTarget:this.setNodeAsTarget,toggleWall:this.toggleWall}),s.a.createElement(j,null),s.a.createElement(R,{insights:"Insights"}),s.a.createElement(q,null))}}]),n}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(s.a.Fragment,null,s.a.createElement(ge,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.6744d8f6.chunk.js.map