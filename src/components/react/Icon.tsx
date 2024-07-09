import { IconDetails } from "@/@types/global"
interface Props {
  iconDetails: IconDetails,
  className?: string,
}

export default function Icon({
  iconDetails,
  className
}:Props) {
  const {imgSrc, altText, title} = iconDetails;
  return (
    <img
    src={imgSrc}
    alt={altText}
    title={title}
    className={className}
    />
  )
}