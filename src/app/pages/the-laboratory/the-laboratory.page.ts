import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DefiApp, Token } from 'src/app/models';
import { DefiLab, LabIntro } from 'src/app/models/defiLab.model';
import { JupiterStoreService } from 'src/app/services';

@Component({
  selector: 'app-the-laboratory',
  templateUrl: './the-laboratory.page.html',
  styleUrls: ['./the-laboratory.page.scss'],
})
export class TheLaboratoryPage implements OnInit {

  constructor
  (private nav: NavController,
    ) { }

  ngOnInit() {
  }
  public searchTerm: string = "";
  public searchItem(term: any) {
    this.searchTerm = term.value;
  }

  //strategy = defi protocol participate + 
  public labProduct: LabIntro[] = [
    {
      strategy: 'marinade-plus',
      apy: 7.1,
      depositAssetImgs: ['/assets/images/icons/solana-logo.webp'],
      // description: `Simple strategy that stake your SOL with mariande platform, get mSOL in return, and deposit them on solend for extra MNDE reward`,
      defiParticipate: ['marinade','solend'],
      rewardAsssets: ['/assets/images/icons/solana-logo.webp', '/assets/images/icons/mnde.webp'],
      learnMoreLink: 'https://solana.org/stake-pools',
      deepLink: 'basic-template',
      active: true,
      riskLevel: 'low',
    },
    {
      strategy: 'solblaze-farmer',
      apy: 9.1,
      // description: `dual yield for farmerers, taking SOL and stake with bSOL, and deposit SOL & bSOL into metora bSOL-sol pool for additional APY`,
      depositAssetImgs: ['/assets/images/icons/solana-logo.webp', '/assets/images/icons/solblaze-logo.png'],
      defiParticipate: ['solblaze','meteora'],
      rewardAsssets: ['/assets/images/icons/solana-logo.webp', '/assets/images/icons/blze.png'],
      learnMoreLink: 'https://solana.org/stake-pools',
      deepLink: 'basic-template',
      active: true,
      riskLevel:'high'
    },
    {
      strategy: 'solblaze-farmer',
      apy: 9.1,
      // description: `dual yield for farmerers, taking SOL and stake with bSOL, and deposit SOL & bSOL into metora bSOL-sol pool for additional APY`,
      depositAssetImgs: ['/assets/images/icons/solana-logo.webp', '/assets/images/icons/usdc.webp'],
      defiParticipate: ['kamino'],
      rewardAsssets: ['/assets/images/icons/solana-logo.webp'],
      learnMoreLink: 'https://solana.org/stake-pools',
      deepLink: 'basic-template',
      active: true,
      riskLevel:'medium'
    }
  ]


  public goToStrategy(dapp: LabIntro) {
    console.log(dapp)
    this.nav.navigateForward('/the-laboratory/' +dapp.deepLink)
  }
}