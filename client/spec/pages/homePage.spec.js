const HomePage = require('../../src/js/pages/homePage');
const StorageHub = require('watch-framework').StorageHub;
const AudioHub = require('watch-framework').AudioHub;

describe('HomePage', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#pageWillLoad', () => {
    it('should set contacts data on page load', () => {
      spyOn(StorageHub, 'setData')
      const page = new HomePage();
      page.pageWillLoad();
      expect(StorageHub.setData).toBeCalledWith('contacts', expect.any(Array));
    })
  })


  describe('#leftButtonEvent', () => {
    it('goes to maps page', () => {
      const props = {
        navigate: () => { },
      };
      const page = new HomePage(props);
      spyOn(page, 'navigate');

      page.leftButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('mapPage');
    });
  });

  describe('#rightButtonEvent', () => {
    it('goes to SOS page', () => {
      const props = {
        navigate: () => { },
      };
      const page = new HomePage(props);
      spyOn(page, 'navigate');

      page.rightButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('SOSPage');
    });
  });

  describe('#bottomButtonEvent', () => {
    it('Should open info page', () => {
      const props = {
        navigate: () => { },
      };
      const page = new HomePage(props);
      spyOn(page, 'navigate');

      page.bottomButtonEvent();
      expect(page.navigate).toBeCalledWith("infoPage");

    });
  });

  describe('#topButtonEvent', () => {
    it('Should go to checklist', () => {
      const props = {
        navigate: () => { },
      };
      const page = new HomePage(props);

      spyOn(page, 'navigate');

      page.topButtonEvent();
      expect(page.navigate).toBeCalledWith("checklistPage");
    });
  });

  describe('#faceButtonEvent', () => {
    it('goes to contacts page', () => {
      const props = {
        navigate: () => { },
      };
      const page = new HomePage(props);
      spyOn(page, 'navigate');

      page.faceButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('contacts');
    });
  });

  describe('#updateTimeDisplay', () => {
    it('updateTimeDisplays calls clock-time if its in the window', () => {
      const page = new HomePage();

      watchFace.innerHTML = page.render();

      jest.spyOn(page, "getDateTime");
      page.updateTimeDisplay(page.getDateTime);
      expect(page.getDateTime).toHaveBeenCalledTimes(1);
    });
  });

  describe('#updateTimeDisplay', () => {
    it('updateTimeDisplays does not call clock-time if its not in the window', () => {
      const page = new HomePage();

      jest.spyOn(page, "getDateTime");
      page.updateTimeDisplay(page.getDateTime);
      expect(page.getDateTime).toHaveBeenCalledTimes(0);
    });
  });

  describe('#updateTimeEverySecond', () => {
    it('update time display gets called three times in 3000 ms', () => {
      const page = new HomePage();

      spyOn(page, 'updateTimeDisplay');

      jest.useFakeTimers();
      page.updateTimeEverySecond();
      jest.runTimersToTime(3000);

      expect(page.updateTimeDisplay).toHaveBeenCalledTimes(3);
    });
  });
});
