import Highway from '@dogstudio/highway';
import {TimelineLite} from 'gsap';

class Fade2 extends Highway.Transition{
    in({from, to , done}){
        var t1 = new TimelineLite();
        t1.fromTo(to, 0.5, {left: '-100%', top: '50%'}, {left: '0%'})
        .fromTo(to, 0.8, {height: '2vh'}, {height: '90vh', top: '10%', onComplete: function(){
            from.remove();
            done();
        }})
        .fromTo(to.children[0].children[1], 1, {opacity: 0}, {opacity: 1})
        .fromTo(to.children[0].children[0].children[0], 0.3, {opacity: 0}, {opacity: 1})
        .fromTo(to.children[0].children[0].children[1], 0.3, {opacity: 0}, {opacity: 1})
        .fromTo(to.children[0].children[0].children[2], 0.3, {opacity: 0}, {opacity: 1})
        .fromTo(to.children[0].children[0].children[3], 0.3, {opacity: 0}, {opacity: 1})
        
    }
    out({from, done}){
        done()
    }
}

export default Fade2;
