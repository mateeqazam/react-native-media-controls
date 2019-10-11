// @flow

// eslint ignore next $FlowFixMe
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 13,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  controlsRow: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  toolbarRow: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  toolbar: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
  },
  timeRow: {
    alignSelf: 'stretch',
  },
  playButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 3,
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.5)',
  },
  playIcon: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },
  replayIcon: {
    width: 25,
    height: 20,
    resizeMode: 'stretch',
  },
  statsRow: {
    justifyContent: 'flex-end',
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: 15,
  },
  progressColumnContainer: {
    flex: 1,
  },
  fullScreenContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 20,
    paddingBottom: 15,
  },
  progressSlider: {
    alignSelf: 'stretch',
  },
  timerLabelsContainer: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: -7,
  },
  timerLabel: {
    fontSize: 12,
    color: 'white',
  },
  track: {
    height: 5,
    borderRadius: 1,
  },
  thumb: {
    width: 20,
    height: 20,
    borderRadius: 50,
    backgroundColor: 'white',
    borderWidth: 3,
  },
});
