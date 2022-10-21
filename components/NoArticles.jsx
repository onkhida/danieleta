export default function NoArticles({ isDark }) {

  const theStyle = {
    width: '100%',
    height: '300px',
    fontFamily: "Crimson Pro",
    border: `${isDark ? '1px solid white' : '1px solid black'}`,
    borderStyle: 'dashed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: `${isDark ? 'white' : 'black'}`
  }

  return (
    <div style={theStyle} className="no-articles">
        There are no articles under this tag just yet.
    </div>
  )
}
