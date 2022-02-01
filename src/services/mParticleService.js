import mParticle from '@mparticle/web-sdk';

class mParticleService {
    constructor() {
        let mParticleConfig = {
                isDevelopmentMode: true,
                identifyRequest: {
                    userIdentities: {
                        email: 'lerroux@example.com',
                        customerid: '6969',
                    },
                },
                identityCallback: function(result) {
                    console.log(result);
                },
                dataPlan: {
                   planId: '1',
                   planVersion: 2
                },
        };
        mParticle.init('us1-b1e387f78b309744b5ee9ef4be89bb4e', mParticleConfig);
    }
    async sendEvent(mpartevent,mnpartdata){
      mParticle.logEvent(mpartevent, mParticle.EventType.Navigation, mnpartdata);
      return "test";
    }
}

export default new mParticleService()
