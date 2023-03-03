import { onMount } from 'solid-js';
import { useSelector } from 'solid-redux-primitives';
const About = () => {
    onMount(() => {
        const state = useSelector((state) => state);
        console.log('Ok');
        console.log(state);
    });
    return <div>About</div>;
};

export default About;
