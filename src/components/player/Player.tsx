import * as React from "react";
import { shaka } from "./shaka-player.compiled.js";
import "./player.scss";
declare let window: any;
interface IPlayer {
  id: string;
  title: string;
  location: any;
}
export class Player extends React.Component<IPlayer, any> {
  public location: any;
  public manifestUri =
    "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8";

  constructor(props) {
    super();
    this.props = props;
    this.initApp = this.initApp.bind(this);
    this.initPlayer = this.initPlayer.bind(this);
  }

  initApp() {
    console.log("this.manifestUri 0");

    // Install built-in polyfills to patch browser incompatibilities.
    shaka.polyfill.installAll();

    // Check to see if the browser supports the basic APIs Shaka needs.
    if (shaka.Player.isBrowserSupported()) {
      console.log("this.manifestUri 1");

      // Everything looks good!
      this.initPlayer();
    } else {
      // This browser does not have the minimum set of APIs we need.
      console.error("Browser not supported!");
    }
  }

  initPlayer() {
    console.log("this.manifestUri 2");

    // Create a Player instance.
    var video = document.getElementById("video");
    var player = new shaka.Player(video);

    // Attach player to the window to make it easy to access in the JS console.
    window.player = player;

    // Listen for error events.
    player.addEventListener("error", this.onErrorEvent);

    // Try to load a manifest.
    // This is an asynchronous process.
    console.log("this.manifestUri", this.manifestUri);
    player
      .load(this.manifestUri)
      .then(function() {
        // This runs if the asynchronous load is successful.
        console.log("The video has now been loaded!");
      })
      .catch(this.onError); // onError is executed if the asynchronous load fails.
  }

  onErrorEvent(event) {
    // Extract the shaka.util.Error object from the event.
    this.onError(event.detail);
  }

  onError(error) {
    // Log the error.
    console.error("Error code", error.code, "object", error);
  }
  render() {
    if (this.props.location) {
      this.props = this.props.location.state.referrer;
    }
    const { title } = this.props;
    return (
      <div>
        <div> {title}</div>
        <video
          id="video"
          className="zoomed_mode"
          poster="//shaka-player-demo.appspot.com/assets/poster.jpg"
          controls
        />
      </div>
    );
  }
}
