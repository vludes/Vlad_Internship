<?php

namespace Vlad\ViewModel\ViewModel;

use Magento\Cms\Api\PageRepositoryInterface;
use Magento\Framework\Api\SearchCriteriaBuilder;
use Magento\Framework\View\Element\Block\ArgumentInterface;
use Magento\Catalog\Model\CategoryFactory;
use Magento\Framework\Registry;

class SubDir implements ArgumentInterface
{
    public function __construct (
        Registry $registry
    ) {
        $this->registry = $registry;
    }

    public function getAllChildCategories()
    {
        $category = $this->registry->registry('current_category');
        return $category->getChildrenCategories();

    }
}
