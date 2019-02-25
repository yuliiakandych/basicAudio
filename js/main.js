(() => {

	let aud    = document.querySelector('audio'),
		play   = document.querySelector("#playAudio"),
		pause  = document.querySelector("#stopAudio"),
		rewind = document.querySelector("#rewindAudio");
		tracks = document.querySelectorAll('.trackholder');

		function playAudio() {
			aud.play();
		}

		function pauseAudio()
		{
			aud.pause(true);
		}

		function rewindAudio() {
			aud.currentTime = 0;

			playAudio();
		}


		function switchAudioTrack() {
			currentTrack = this.dataset.currenttrack;

			aud.src = `audio/${currentTrack}`;
			aud.load();
			aud.play();
		}

		play.addEventListener("click", playAudio);
		pause.addEventListener("click", pauseAudio);
		rewind.addEventListener("click", rewindAudio);

		tracks.forEach(track => {
			track.addEventListener("click", switchAudioTrack);
		});

})();