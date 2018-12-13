#!/bin/bash
cd functions && npm install && cd ..
firebase deploy --token "$FIREBASE_TOKEN" --non-interactive
