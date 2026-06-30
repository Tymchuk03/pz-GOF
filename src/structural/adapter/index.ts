export function runAdapter(): void {
  interface MediaPlayer {
    play(fileName: string): void;
  }

  class OldAudioPlayer {
    playMp3(fileName: string): void {
      console.log(`Adapter: playing old MP3 file ${fileName}`);
    }
  }

  class AudioAdapter implements MediaPlayer {
    constructor(private oldPlayer: OldAudioPlayer) {}

    play(fileName: string): void {
      this.oldPlayer.playMp3(fileName);
    }
  }

  const player: MediaPlayer = new AudioAdapter(new OldAudioPlayer());
  player.play('song.mp3');
}
