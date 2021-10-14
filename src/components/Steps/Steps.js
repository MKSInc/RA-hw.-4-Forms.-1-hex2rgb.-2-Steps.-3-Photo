import './steps.css';
import {useState} from 'react';
import FormSteps from './FormSteps/FormSteps';
import ResultsStepsList from './ResultsStepsList/ResultsStepsList';
import sortDate from './utility/sortDate';

export default function Steps() {
	const
		[results, setResults] = useState([{ date: '12.10.2021', distance: '5' }]),
		[form, setForm] = useState({date: '', distance: ''}),
		[isEdit, setIsEdit] = useState(false);

	const addResult = (result) => {
		if (isEdit) setIsEdit(false);
		if (results.some((item) => item.date === result.date)) {
			setResults((prevResults) => prevResults.map((prevResults) => {
					if (prevResults.date === result.date) {
						if (isEdit) return result;
						return {
							date: prevResults.date,
							distance: parseFloat(prevResults.distance) + parseFloat(result.distance)};
					}

					return prevResults;
				})
			)
			return;
		}

		setResults((prevResults) => sortDate([...prevResults, result]));
	}

	const handleRemove = (date) => {
		setResults(results.filter((result) => result.date !== date));
	}

	const handleEdit = (date) => {
		setForm(date);
		setIsEdit(true);
	}

	return (
		<div className={'steps'}>
			<FormSteps form={form} setForm={setForm} addResult={addResult} />
			{results.length === 0 ? null:
			<div className={'steps__results results-steps'}>
				<header className={'results-steps__header steps-columns'}>
					<div className={'steps-columns__column-1'}>Дата</div>
					<div className={'steps-columns__column-2'}>Пройдено км</div>
					<div className={'steps-columns__column-3'}>Действия</div>
				</header>
				<ResultsStepsList results={results} handleRemove={handleRemove} handleEdit={handleEdit}/>
			</div>}
		</div>
	)
}
