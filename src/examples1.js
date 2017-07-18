import React, { Component } from 'react';
import * as THREE from 'three';

class Examples1 extends Component{
    constructor(props){
        super(props);
        var id = setInterval(()=>{
            clearInterval(id);
            this.init();
        },100);
    }
    init(){
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

        var renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        this.root.appendChild( renderer.domElement );

        var geometry = new THREE.BoxGeometry( 1, 1, 1 );
        var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        var cube = new THREE.Mesh( geometry, material );
        scene.add( cube );

        camera.position.z = 5;

        var animate = function () {
            requestAnimationFrame( animate );

            cube.rotation.x += 0.1;
            cube.rotation.y += 0.1;

            renderer.render(scene, camera);
        };

        animate();            
    }
    render(){
        return <div ref={(d)=>{this.root=d;}} id={1009}></div>;
    }
};

export default Examples1;