import './__mocks__/video.mock'; 
import { loadVideo } from "../src/index";

test('correct render video', () => {
  document.body.innerHTML = `<div id="app"></div>`;
  const src = "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4";

  loadVideo({
    target: '#app',
    source: src,
    poster: 'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217',
    thumb: 'https://peach.blender.org/wp-content/uploads/dsc01092-300x225.jpg',
    showThumbAt: 4,
    thumbEndAt: 60
  });

  const video = document.getElementsByTagName("video")[0];
  expect(video.src).toEqual(src);

  const play = document.getElementsByClassName('play')[0];

  expect(play.getAttribute('data-icon')).toEqual('P');
  play.click();
  expect(play.getAttribute('data-icon')).toEqual('u');
});