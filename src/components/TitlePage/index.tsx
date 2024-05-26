interface TitleProps {
  title: string;
}
export default function TitlePage({title}: TitleProps) {
  return (
    <h1 style={{color:'#12b2b8', fontSize:'32px', fontWeight:'500', textTransform:'capitalize'}}>{title}</h1>
  )
}