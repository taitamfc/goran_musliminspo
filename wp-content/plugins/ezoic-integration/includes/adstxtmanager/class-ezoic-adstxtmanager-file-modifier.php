<?php

namespace Ezoic_Namespace;


/**
 * Class Ezoic_AdsTxtManager_File_Modifier
 * @package Ezoic_Namespace
 */
class Ezoic_AdsTxtManager_File_Modifier implements iAdsTxtManager_Solution {

    private function determineRootPath() {
        return get_home_path();
    }

    private function modifiedAdsTxtFileName() {
        return $this->determineRootPath() . "ads-txt-orig.txt";
    }

    private function origAdsTxtFileName() {
        return $this->determineRootPath() . "ads.txt";
    }

    public function SetupSolution() {
        //Do we have an ads.txt file? rename the file to ads-txt-orig.txt
        //Get path to cache folder and insert out htaccess file or modify current htaccess file
        $filePath = $this->origAdsTxtFileName();
        $newFilePath = $this->modifiedAdsTxtFileName();

	    if(empty($filePath) || !file_exists($filePath)) {
            return;
        }

	    $redirect_status = Ezoic_AdsTxtManager::ezoic_verify_adstxt_redirect();

	    if ( $redirect_status === false ) {
		    // try again after renaming orig ads.txt file
		    $renameSuccess = rename( $filePath, $newFilePath );
		    if ( $renameSuccess == false ) {
			    $message = "Failed to rename existing ads.txt file.";
		    }

		    $redirect_status = Ezoic_AdsTxtManager::ezoic_verify_adstxt_redirect();
	    }

        $adstxtmanager_status = Ezoic_AdsTxtManager::ezoic_adstxtmanager_status(true);
        $adstxtmanager_status['status'] = $redirect_status;
        if (!empty($message)) {
            $adstxtmanager_status['message'] = $message;
        }
        update_option( 'ezoic_adstxtmanager_status', $adstxtmanager_status );

    }

    public function TearDownSolution() {
        //Do we have an ads-txt-orig.txt file? restore that to ads.txt
        $modifiedFilePath = $this->modifiedAdsTxtFileName();
        $origFilePath = $this->origAdsTxtFileName();

        if(empty($modifiedFilePath ) || !file_exists($modifiedFilePath )) {
            return;
        }

        $renameSuccess = rename($modifiedFilePath , $origFilePath);

	    if ( get_option( 'ezoic_adstxtmanager_status' ) !== false ) {
		    delete_option( 'ezoic_adstxtmanager_status' );
	    }
    }
}
