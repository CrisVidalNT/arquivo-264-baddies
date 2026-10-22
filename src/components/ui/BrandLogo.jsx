import Image from 'next/image';

export default function BrandLogo({ size = 'normal', className = '' }) {
  return (
    <div className={`brand-logo brand-logo--${size} ${className}`}>
      <Image src="/assets/logo-baddies-azul.png" width={740} height={295}
        alt="Clube das Baddies" priority={size === 'large'} />
    </div>
  );
}
