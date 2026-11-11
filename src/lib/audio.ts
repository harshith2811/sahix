'use client';

// Web Audio API Synthesizer for high-tech micro-interactions
// Operates entirely without external audio files, ultra-lightweight, zero bundle overhead

class SoundManager {
  private ctx: AudioContext | null = null;
  private muted: boolean = false;
  private initialized: boolean = false;

  constructor() {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sahix_sound_enabled');
      // Default to muted until user enables or toggles it, or respects preference
      this.muted = saved !== null ? saved !== 'true' : false;
    }
  }

  private initCtx() {
    if (this.ctx) return;
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioContextClass) {
        this.ctx = new AudioContextClass();
        this.initialized = true;
      }
    } catch {
      // AudioContext not supported
    }
  }

  public isMuted(): boolean {
    return this.muted;
  }

  public setMuted(muted: boolean) {
    this.muted = muted;
    if (typeof window !== 'undefined') {
      localStorage.setItem('sahix_sound_enabled', (!muted).toString());
      window.dispatchEvent(new CustomEvent('sahix-sound-toggle', { detail: { muted } }));
    }
  }

  public toggleMute(): boolean {
    this.setMuted(!this.muted);
    if (!this.muted) {
      this.play('blip');
    }
    return this.muted;
  }

  private triggerHaptic(type: 'click' | 'blip' | 'switch' | 'success' | 'execute' | 'slider') {
    if (typeof window === 'undefined' || typeof navigator === 'undefined' || !('vibrate' in navigator)) return;
    try {
      if (type === 'click' || type === 'slider') {
        navigator.vibrate(8);
      } else if (type === 'blip' || type === 'switch') {
        navigator.vibrate(14);
      } else if (type === 'execute') {
        navigator.vibrate([10, 30, 20]);
      } else if (type === 'success') {
        navigator.vibrate([15, 35, 20, 35, 25]);
      }
    } catch {
      // Haptics safely ignored if unsupported
    }
  }

  public play(type: 'click' | 'blip' | 'switch' | 'success' | 'execute' | 'slider') {
    this.triggerHaptic(type);
    if (this.muted) return;
    this.initCtx();
    if (!this.ctx) return;

    if (this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }

    const now = this.ctx.currentTime;

    try {
      if (type === 'click') {
        // High-tech subtle mechanical pop
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(680, now);
        osc.frequency.exponentialRampToValueAtTime(140, now + 0.025);

        gain.gain.setValueAtTime(0.04, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.025);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.03);
      } else if (type === 'blip') {
        // Crisp digital confirmation blip
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1200, now);
        osc.frequency.setValueAtTime(1600, now + 0.02);

        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.05);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.06);
      } else if (type === 'switch') {
        // Subtle toggle switch
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(450, now);
        osc.frequency.exponentialRampToValueAtTime(750, now + 0.04);

        gain.gain.setValueAtTime(0.035, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.05);
      } else if (type === 'slider') {
        // Discrete stepping tick
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(900, now);
        gain.gain.setValueAtTime(0.02, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.015);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.02);
      } else if (type === 'execute') {
        // High-tech frequency sweep
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(320, now);
        osc.frequency.exponentialRampToValueAtTime(1200, now + 0.12);

        gain.gain.setValueAtTime(0.04, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.14);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.15);
      } else if (type === 'success') {
        // Harmonic major chord chime
        [523.25, 659.25, 783.99].forEach((freq, i) => {
          if (!this.ctx) return;
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + i * 0.04);

          gain.gain.setValueAtTime(0.04, now + i * 0.04);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.04 + 0.18);

          osc.connect(gain);
          gain.connect(this.ctx.destination);

          osc.start(now + i * 0.04);
          osc.stop(now + i * 0.04 + 0.2);
        });
      }
    } catch {
      // Audio playback safely ignored if browser policies block it
    }
  }
}

export const soundManager = new SoundManager();
