(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,a){},16:function(t,e,a){t.exports=a.p+"static/media/logo.5d5d9eef.svg"},17:function(t,e,a){},19:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(2),i=a.n(o),s=(a(14),a(6)),c=a(3),l=a(4),h=a(7),u=a(5),d=a(8),b=(a(16),a(17),function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(h.a)(this,Object(u.a)(e).call(this,t))).state={board:Array(9).fill(null),player:"X",winner:null},a}return Object(d.a)(e,t),Object(l.a)(e,[{key:"checkWin",value:function(){for(var t=[["0","1","2"],["3","4","5"],["6","7","8"],["0","3","6"],["1","4","7"],["2","5","8"],["0","4","8"],["2","4","6"]],e=0;e<t.length;e++){var a=Object(s.a)(t[e],3),n=a[0],r=a[1],o=a[2];this.state.board[n]&&this.state.board[n]===this.state.board[r]&&this.state.board[r]===this.state.board[o]&&(this.setState({winner:this.state.player}),alert("You won"))}}},{key:"handleClick",value:function(t){var e=this.state.board,a="X"===this.state.player?"O":"X";null!==this.state.board[t]||this.state.winner||(e[t]=this.state.player,this.setState({board:e,player:a}),this.checkWin())}},{key:"render",value:function(){var t=this,e=this.state.board.map(function(e,a){return r.a.createElement("div",{className:"box",key:a,onClick:function(){return t.handleClick(a)}},e)});return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Tic Tac Toe"),r.a.createElement("div",{className:"board"},e))}}]),e}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},9:function(t,e,a){t.exports=a(19)}},[[9,1,2]]]);
//# sourceMappingURL=main.b2b6187b.chunk.js.map