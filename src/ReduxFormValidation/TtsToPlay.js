const TtsToPlay = (values) => {
    const errors = {};
    if (!values.ttsToPlay || values.ttsToPlay === "") {
        errors.ttsToPlay = "Please enter your Tts To Play";
    }

    return errors
}

export default TtsToPlay