import { Serialization, Cardano } from '@cardano-sdk/core';
import { HexBlob } from '@cardano-sdk/util';

const cbor = HexBlob(
    '9fc25f584037d34fac60a7dd2edba0c76fa58862c91c45ff4298e9134ba8e76be9a7513d88865bfdb9315073dc2690b0f2b59a232fbfa0a8a504df6ee9bb78e3f33fbdfef95529c9e74ff30ffe1bd1cc5795c37535899dba800000ffc25f58408d4820519e9bba2d6556c87b100709082f4c8958769899eb5d288b6f9ea9e0723df7211959860edea5829c9732422d25962e3945c68a6089f50a18b0114248b7555feea4851e9f099180600000000000000000000000ffc25f58408d4820519e9bba2d6556c87b100709082f4c8958769899eb5d288b6f9ea9e0723df7211959860edea5829c9732422d25962e3945c68a6089f50a18b0114248b7555feea4851e9f099180600000000000000000000000ffc25f584039878c5f4d4063e9a2ee75a3fbdd1492c3cad46f4ecbae977ac94b709a730e367edf9dae05acd59638d1dec25e2351c2eecb871694afae979de7085b522efe1355634138bbd920200d574cdf400324cdd1aafe10a240ffc25f584022a6282a7d960570c4c729decd677ec617061f0e501249c41f8724c89dc97dc0d24917bdb7a7ebd7c079c1c56fa21af0f119168966356ea384fb711cb766015e55bfc5bc86583f6a82ae605a93e7bf974ae74cd051c0ffc25f58404445ab8649611ee8f74a3c31e504a2f25f2f7631ef6ef828a405542904d84c997304b1b332d528ee54873b03cfb73cd3c5b35b91184f6846afccec7271bda8a05563ba46aed8c82611da47fd608d027447f8391161c0ffc25f58400258b535c4d4a22a483b22b2f5c5c65bed9e7de59266f6bbaa8997edf5bec6bb5d203641bb58d8ade1a3a5b4e5f923df502cf1e47691865fe1984eacef3be96a551ed585e070265db203a8866726bed053cb6c8aa200ffc25f5840021104310667ec434e9e2cd9fa71853593c42e1b55865ac49f80b2ea22beeec9b4a55e9545055a2bcde3a78d36836df11df0f91c1dae9a8aee58419b8650bc6c529361f9601a4005051b045d05f39a5f00ebd5ffff'
);

const data = Serialization.PlutusData.fromCbor(cbor);
const core = data.toCore() as unknown as Cardano.PlutusList;
const roundTrippedCbor = Serialization.PlutusData.fromCore({ items: core.items }).toCbor();

if (cbor === roundTrippedCbor) {
    console.log('Round trip successful');
} else {
    console.error('Round trip failed');
    console.error('Original:', cbor);
    console.error('Round tripped:', roundTrippedCbor);
}
