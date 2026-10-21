import {makeProject} from '@motion-canvas/core';
import growth from './scenes/growth?scene';

export default makeProject({
  scenes: [growth],
  // Render settings (1920x1080, 60 fps, ffmpeg mp4) live in project.meta.
});
