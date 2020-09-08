import Highway from '@dogstudio/highway';
import Fade from './transition';
import Fade2 from './transition-education';

const H = new Highway.Core({
    transitions : {
        home: Fade,
        about: Fade,
        education: Fade2,
        work: Fade2,
        contact: Fade,
        miscellaneous: Fade
    }
    
});