interface Props {
  imgSrc: string,
  altText: string,
  className?: string,
}

export default function Icon({
  imgSrc,
  altText="",
  className
}:Props) {

  return (
    <img
    src={imgSrc}
    alt={altText}
    className={className}
    />
  )
}