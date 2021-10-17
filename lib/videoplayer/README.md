## HTML5 Video Player

### How to use
there are two way to use this library
- as a global variable be loaded in a `<script>` tag in the browser
- or as an ES module using import and export statements Could be loaded in a `<script type="module">` tag in the browser, or loaded by Node.js or another bundler.

### use `<script>` tag in the browser
 - copy the library file `dist/classic/index.js` into your `public` path
 - and copy the style file `src/styles.css` into your `public` path
 - load style into your html file<br>
   `<link rel="stylesheet" href="public/videoplayer/styles.css">`<br>
 - and load library file into your html file<br>
   `<script src="public/videoplayer/index.js"></script>`<br>
- load video using this library

  ```<script>
    $.loadVideo({
      target: '#app',
      source: 'https://mdn.github.io/learning-area/javascript/apis/video-audio/finished/video/sintel-short.mp4',
      poster: 'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217',
      thumb: 'https://peach.blender.org/wp-content/uploads/dsc01092-300x225.jpg',
      showThumbAt: 4,
      thumbEndAt: 60
    })
  </script>
  ```

### use `<script type="module">` tag in the browser
 - copy the library file `dist/module/index.js` into your `public` path
 - and copy the style file `src/styles.css` into your `public` path
 - load style into your html file<br>
   `<link rel="stylesheet" href="public/videoplayer/styles.css">`<br>
- load video using this library

  ```<script>
    import {loadVideo} from 'public/videoplayer/index.js'
    loadVideo({
      target: '#app',
      source: 'https://mdn.github.io/learning-area/javascript/apis/video-audio/finished/video/sintel-short.mp4',
      poster: 'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217',
      thumb: 'https://peach.blender.org/wp-content/uploads/dsc01092-300x225.jpg',
      showThumbAt: 4,
      thumbEndAt: 60
    })
  </script>
  ```

### at the loadVideo function there are parameters
1. `target` is an id of document element that video player can be appear
2. `source` is an source of video file, the format can be formats can as mp4, MPEG4, or Ogg
3. `poster` is an image thumbnail should be appear before video played
3. `thumb` is an image thumbnail will show from `i` second to `n` second
4. `showThumbAt` starting to show image thumbnail from `i` second
5. `thumbEndAt` disapear image thumbnail at `n` second

## Development
I'm writing this this library using vanila JS, but i'm using parcel (https://parceljs.org) to compile the source code into difference type of module such as:
- global – a classic script that could be loaded in a `<script>` tag in the browser. Not supported for library targets.
- and esmodule – an ES module using import and export statements. Could be loaded in a `<script type="module">` tag in the browser, or loaded by Node.js or another bundler.
 
### Setup Development
 - the source code available at `src/index.js`
 - install all depencies `npm install` 
 - this library using jest as a tesing framework, run test `npm test`
 - compile the source code `npm run build` the output will be writen to `dist/classic` and `disc/module`