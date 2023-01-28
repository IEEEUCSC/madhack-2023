import { Application } from '@splinetool/runtime';
if (window.innerWidth > 768) {
    const canvas = document.getElementById('canvas3d');
    const app = new Application(canvas);
    app.load('https://prod.spline.design/IEXt3FfQKg8EXY6U/scene.splinecode');
}