import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, CardBody } from '@windmill/react-ui'
import { DeleteReduxDataServiceTtsToPlay, GetAllTtsToPlay, GetIdTtsToPlay, PutUpdateTtsToPlay } from 'src/api/Actions/Service-TtsToPlay/ServiceTtsToPlay';
import TtsToPlayModal from './TtsToPlayModal'
import Swal from 'sweetalert2'

const mapStateToProps = (state) => {
    return {
        loading: state.ReduxState.loading,
        showModal: state.ReduxState.showModal,
        getAllTtsToPlay: state.ServiceTtsToPlay.getAllTtsToPlay,
        errorAllTtsToPlay: state.ServiceTtsToPlay.errorAllTtsToPlay,
        getIdTtsToPlay: state.ServiceTtsToPlay.getIdTtsToPlay,
        errorIdTtsToPlay: state.ServiceTtsToPlay.errorIdTtsToPlay,
        putUpdateTtsToPlay: state.ServiceTtsToPlay.putUpdateTtsToPlay,
        errorUpdateTtsToPlay: state.ServiceTtsToPlay.errorUpdateTtsToPlay,
    };
};
class TtsToPlay extends Component {
    componentDidMount() {
        this.props.dispatch(GetAllTtsToPlay())
    }
    handleEdit() {
        this.props.dispatch(GetIdTtsToPlay(this.props.getAllTtsToPlay[0].id))
        this.props.dispatch({ type: 'set', showModal: true })
    }
    handleSubmit(data) {
        const dataReq = {
            textToPlay: data.ttsToPlay
        }
        this.props.dispatch(PutUpdateTtsToPlay(this.props.getIdTtsToPlay.id, dataReq))
        this.props.dispatch({ type: 'set', loading: true })
        data.ttsToPlay = ""

    }
    componentDidUpdate(prevProps, prevState) {
        if (this.props.putUpdateTtsToPlay !== false) {
            Swal.fire({
                title: 'Update Tts To Play Success',
                icon: 'success',
            })
            this.props.dispatch(DeleteReduxDataServiceTtsToPlay())
            this.props.dispatch(GetAllTtsToPlay())
            this.props.dispatch({ type: 'set', showModal: false,  loading: false })
        }
        if (this.props.errorUpdateTtsToPlay !== false) {
            this.props.dispatch(DeleteReduxDataServiceTtsToPlay())
            this.props.dispatch(GetAllTtsToPlay())
            this.props.dispatch({ type: 'set', showModal: false,  loading: false })
        }
    }
    render() {
        const { getAllTtsToPlay } = this.props
        return (
            <>
                <button className="px-4 h-10 bg-yellow-300 rounded-lg mb-4 hover:bg-yellow-400 text-white"
                    onClick={this.handleEdit.bind(this)}>
                    <i className="fas fa-edit mr-2" />
                    Edit Tts To Play
                </button>
                <Card>
                    <CardBody>
                        <p className="mb-4 font-semibold text-gray-600 dark:text-gray-300 text-xl">TTS TO PLAY</p>
                        {getAllTtsToPlay && getAllTtsToPlay.map((data, idx) => {
                            return (
                                <p className="text-gray-600 dark:text-gray-400" key={idx}>
                                    {data.textToPlay}
                                </p>
                            )
                        })}
                    </CardBody>
                </Card>
                <TtsToPlayModal
                    onSubmit={(data) => this.handleSubmit(data)} />
            </>
        )
    }
}

export default connect(mapStateToProps, null)(TtsToPlay)