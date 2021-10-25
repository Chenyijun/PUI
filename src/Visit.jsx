import './App.css'

const Visit = () => {
  return (
    <div class="content" id="centerColumn">
		<h1>Visit</h1>
		<div id="twoColGrid">
			<div>
				<p>Come visit us at our physical location: <br/> 1234 Bun Drive Pittsburgh, PA 15213</p>
				<p>Our hours: <br/> Monday - Friday 7am - 2pm</p>
			</div>
			<img src="fakeMap.png" id="map" alt="Map of store"/>
		</div>
	</div>
  )
}

export default Visit