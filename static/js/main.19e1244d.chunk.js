(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],[,,,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},function(e,t,a){e.exports=a(20)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),l=a.n(i),r=a(7),n=a.n(r),m=(a(15),a(3)),o=a(1),s=a(2),d=a(5),c=a(4),u=(a(16),a(17),a(18),function(e){var t=e.title,a=e.description,i=e.imgUrl,r=e.imdbUrl;return l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-image"},l.a.createElement("figure",{className:"image is-4by3"},l.a.createElement("img",{src:i,alt:"Film logo"}))),l.a.createElement("div",{className:"card-content"},l.a.createElement("div",{className:"media"},l.a.createElement("div",{className:"media-left"},l.a.createElement("figure",{className:"image is-48x48"},l.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),l.a.createElement("div",{className:"media-content"},l.a.createElement("p",{className:"title is-8"},t))),l.a.createElement("div",{className:"content"},a,l.a.createElement("br",null),l.a.createElement("a",{href:r},"IMDB"))))});u.defaultProps={description:""};var h=function(e){var t=e.movies;return l.a.createElement("div",{className:"movies"},t.map((function(e){return l.a.createElement(u,Object.assign({key:e.imdbId},e))})))};h.defaultProps={movies:[]};var p=a(8),v=(a(19),function(e){Object(d.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(o.a)(this,a);for(var i=arguments.length,l=new Array(i),r=0;r<i;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:"",isValid:[]},e.handleChange=function(t){var a=t.target;e.setState(Object(p.a)({},a.name,a.value))},e.resetForm=function(){return e.setState({title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:"",isValid:[]})},e.addNoValid=function(t){e.setState((function(e){return{isValid:[].concat(Object(m.a)(e.isValid),[t])}}))},e.removeNoValid=function(t){e.setState((function(e){return{isValid:e.isValid.filter((function(e){return e!==t}))}}))},e.validUrl=function(e){return!/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/.test(e)},e.validRepeatData=function(t){return!e.props.movies.some((function(a){return a[t]===e.state[t]}))},e.valid=function(t){var a=t.target,i=a.name,l=a.value;if("imgUrl"===i||"imdbUrl"===i||"imdbId"===i){if(!e.validRepeatData(i))return void e.addNoValid(i);e.removeNoValid(i)}"imgUrl"===i||"imdbUrl"===i?e.validUrl(e.state[i])?e.addNoValid(i):e.removeNoValid(i):l.trim()?e.removeNoValid(i):e.addNoValid(i)},e.validAllForm=function(){var t=e.state,a=t.title,i=t.description,l=t.imgUrl,r=t.imdbUrl,n=t.imdbId;return!e.validUrl(l)&&!e.validUrl(r)&&a.trim()&&i.trim()&&n.trim()&&e.validRepeatData("imgUrl")&&e.validRepeatData("imdbUrl")&&e.validRepeatData("imdbId")},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props.addMovie,a=this.state,i=a.title,r=a.description,n=a.imgUrl,m=a.imdbUrl,o=a.imdbId,s=a.isValid;return l.a.createElement("form",{className:"form",onSubmit:function(a){a.preventDefault(),e.validAllForm()&&(t({title:i,description:r,imgUrl:n,imdbUrl:m,imdbId:o}),e.resetForm())}},l.a.createElement("h2",null,"Form add new cool film"),l.a.createElement("hr",null),l.a.createElement("label",{className:s.includes("title")?"error":""},"title",l.a.createElement("input",{id:"title",name:"title",placeholder:"title your film..",value:this.state.title,onChange:this.handleChange,onBlur:this.valid})),l.a.createElement("hr",null),l.a.createElement("label",{className:s.includes("description")?"error":""},"description",l.a.createElement("input",{id:"description",name:"description",placeholder:"description your film..",value:this.state.description,onChange:this.handleChange,onBlur:this.valid})),l.a.createElement("hr",null),l.a.createElement("label",{className:s.includes("imgUrl")?"error-repeat":""},"img url",l.a.createElement("input",{id:"imgUrl",name:"imgUrl",placeholder:"img url",value:this.state.imgUrl,onChange:this.handleChange,onBlur:this.valid})),l.a.createElement("hr",null),l.a.createElement("label",{className:s.includes("imdbUrl")?"error-repeat":""},"imdb url",l.a.createElement("input",{id:"imdbUrl",name:"imdbUrl",placeholder:"imdb url",value:this.state.imdbUrl,onChange:this.handleChange,onBlur:this.valid})),l.a.createElement("hr",null),l.a.createElement("label",{className:s.includes("imdbId")?"error-repeat":""},"imdb id",l.a.createElement("input",{id:"imdbId",name:"imdbId",placeholder:"imdb id",value:this.state.imdbId,onChange:this.handleChange,onBlur:this.valid})),l.a.createElement("hr",null),l.a.createElement("button",{type:"submit",disabled:!this.validAllForm()},"Save film"))}}]),a}(i.Component)),g=a(9),b=function(e){Object(d.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(o.a)(this,a);for(var i=arguments.length,l=new Array(i),r=0;r<i;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={movies:g},e.addMovie=function(t){e.setState((function(e){return{movies:[].concat(Object(m.a)(e.movies),[t])}}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.movies;return l.a.createElement("div",{className:"page"},l.a.createElement("div",{className:"page-content"},l.a.createElement(h,{movies:e})),l.a.createElement("div",{className:"sidebar"},l.a.createElement(v,{addMovie:this.addMovie,movies:e})))}}]),a}(i.Component);n.a.render(l.a.createElement(b,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.19e1244d.chunk.js.map