



export function MainFixedBackground () {
  return(
    <section
      style={{
        width: '100%',
        height: '100vh',
        background: 'url(/img/big-liquid-gradient.jpg) no-repeat center',
        backgroundSize: 'cover',
        position: 'fixed',
        zIndex: -1
      }}
    >
    </section>
  )
}