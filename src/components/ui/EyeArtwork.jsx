import Image from 'next/image';

export default function EyeArtwork({ small = false }) {
  return (
    <div className={`eye-scene ${small ? 'eye-scene--small' : ''}`} aria-hidden="true">
      <span className="eye-orbit eye-orbit--one" />
      <span className="eye-orbit eye-orbit--two" />
      <Image src="/assets/olho-azul-baddies.webp" alt="" width={900} height={540} priority
        className="eye-art" />
      <span className="eye-flare" />
    </div>
  );
}
