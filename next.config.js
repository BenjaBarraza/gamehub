import Image from 'next/image';

function GameImage({ imageUrl, altText }) {
  return (
    <Image
      src={imageUrl} // Asegúrate de que la URL comience con "https://media.rawg.io"
      alt={altText}
      width={300} // especifica un ancho
      height={200} // especifica una altura
    />
  );
}
