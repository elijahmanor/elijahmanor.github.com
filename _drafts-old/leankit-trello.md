---
layout: post
title: AnyBar
date: '2015-06-09 02:29:11'
---


javascript:(function(){var newcss=window.prompt("new css rule:");if("\v"=="v"){document.createStyleSheet().cssText=newcss}else{var tag=document.createElement("style");tag.type="text/css";document.getElementsByTagName("head")[0].appendChild(tag);tag[(typeof document.body.style.WebkitAppearance=="string")?"innerText":"innerHTML"]=newcss}})();


body {
    background-color: rgb(0, 121, 191);
}

.allLaneHeader {
    background-color: #e2e4e6;
}

.kb-lane-header-inner {
    margin-bottom: 0;
}

.LaneLevel3 .allLaneHeader {
    margin-bottom: 0;
    border-radius: 3px 3px 0 0;
}

.laneName {
    text-transform: capitalize;
    text-align: left;
}

.laneContents {
    background-color: #e2e4e6;
    margin-top: 0;
    border-radius: 0 0 3px 3px;
}

#toolbar {
    background-color: rgba(0,0,0,.15);
    box-shadow: none;
}

.tb-button-view {
    background-color: #448FBB;
    border: none;
}

.card-background {
    border-radius: 3px;
}

.card-header {
    border-radius: 3px 3px 0 0;
}

