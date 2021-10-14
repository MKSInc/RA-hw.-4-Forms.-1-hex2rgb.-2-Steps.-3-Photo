import './form-steps.css'
import PropTypes from 'prop-types';

function FormSteps({ form, setForm, addResult }) {
	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setForm((prevForm) => ({...prevForm, [name]: value}));
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		const regexpDate = /^\d{2}\.\d{2}\.\d{4}$/;
		if (!regexpDate.test(form.date)) return;

		const regexpDistance = /^\d+\.?\d*$/;
		if (!regexpDistance.test(form.distance)) return;

		addResult(form);
		setForm({ date: '', distance: '' })
	}

	return (
		<form className={'steps__form form-steps steps-columns steps-columns_bottom'} onSubmit={handleSubmit}>
			<div className={'steps-columns__column-1'}>
				<label className={'from-steps__label'} htmlFor={'input-date'}>Дата</label>
				<input
					className={'from-steps__input'}
					id={'input-date'}
					name={'date'}
					value={form.date}
					onChange={handleInputChange}
					placeholder={'дд.мм.гггг'}/>
			</div>
			<div className={'steps-columns__column-2'}>
				<label className={'from-steps__label'} htmlFor={'input-distance'}>Пройдено км</label>
				<input
					className={'from-steps__input'}
					id={'input-distance'}
					name={'distance'}
					value={form.distance}
					onChange={handleInputChange}
					placeholder={'xx.xx'}/>
			</div>
			<div className={'steps-columns__column-3 form-steps__column-3'}>
				<button className={'from-steps__btn'}>OK</button>
			</div>
		</form>
	)
}

FormSteps.propTypes = {
	addResult: PropTypes.func.isRequired,
	form: PropTypes.object.isRequired,
	setForm: PropTypes.func.isRequired,
}

export default FormSteps;