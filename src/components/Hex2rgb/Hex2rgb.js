import './hex2rgb.css';
import {useState} from 'react';
import convert from './convert/convert';

export default function Hex2rgb() {
	const
		[inputHex, setInputHex] = useState('#34495e'),
	  [result, setResult] = useState(convert(inputHex)),
		[bgColor, setBgColor] = useState(convert(inputHex));

	const handleInputHexChange = (event) => {
		const { value } = event.target;
		if (value.length > 7) return;

		setInputHex(value);
		setResult('');

		if (value.length < 7) return;

		const regexp = /#[\dabcdef]{6}/;
		if (regexp.test(value.toLowerCase())) {
			const rgb = convert(value);
			setResult(rgb);
			setBgColor(rgb);
		} else setResult('Ошибка!');
	};

	const hex2rgbBgColor = { backgroundColor: bgColor };

	return (
		<div className={'hex2rgb _max-height__body'}>
			<div className={`hex2rgb__body hex2rgb__body`} style={hex2rgbBgColor}>
				<div className={'hex2rgb__content'}>
					<div className={'hex2rgb__input-wrap'}>
						<input value={inputHex} className={'hex2rgb__input'} onChange={handleInputHexChange}/>
					</div>
					<div className={'hex2rgb__result-wrap'}>
						<div className={'hex2rgb__result'}>{result}</div>
					</div>
				</div>
			</div>
		</div>
	)
}
