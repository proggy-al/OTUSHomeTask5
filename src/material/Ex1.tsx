import { FormControl, FormLabel, FormControlLabel, RadioGroup, Radio } from "@mui/material";

const css = {
    margin: '1px',
    padding: '1px',
    border: '1px solid red'
};

const Ex1 = () => {
    return <div>
        <FormControl style={css}>
            <FormLabel id="demo-radio-buttons-group-label">Пример radio Buttons</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
            >
                <FormControlLabel value="female" control={<Radio />} label="Val1" />
                <FormControlLabel value="male" control={<Radio />} label="Val2" />
                <FormControlLabel value="other" control={<Radio />} label="Val3" />
            </RadioGroup>
        </FormControl>
    </div>
}

export default Ex1;