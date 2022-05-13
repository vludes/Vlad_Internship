<?php

namespace Vlad\ViewModel\ViewModel;

use Magento\Cms\Api\PageRepositoryInterface;
use Magento\Framework\Api\SearchCriteriaBuilder;
use Magento\Framework\View\Element\Block\ArgumentInterface;
use Magento\Catalog\Model\CategoryFactory;
use Magento\Framework\Registry;

class SubDir implements ArgumentInterface
{
    /**
     * @var PageRepositoryInterface
     */
    private $pageRepository;
    /**
     * @var SearchCriteriaBuilder
     */
    private $searchCriteriaBuilder;
    /**
     * @var CategoryFactory
     */
    private $categoryFactory;
    /**
     * @var Registry
     */
    private $registry;

    /**
     * @param PageRepositoryInterface $pageRepository
     * @param SearchCriteriaBuilder $searchCriteriaBuilder
     * @return void
     */
    public function __construct (
        CategoryFactory         $categoryFactory,
        PageRepositoryInterface $pageRepository,
        SearchCriteriaBuilder   $searchCriteriaBuilder,
        Registry                $registry
    ) {
        $this->registry = $registry;
        $this->categoryFactory = $categoryFactory;
        $this->pageRepository = $pageRepository;
        $this->searchCriteriaBuilder = $searchCriteriaBuilder;
    }


    /**
     * @return \Magento\Cms\Api\Data\PageInterface[]
     * @throws \Magento\Framework\Exception\LocalizedException
     */


    public function getAllChildCategoriesUlr()
    {
        $children = $this->getAllChildCategories();
        $array = [];
        foreach ($children->getItems() as $item){
            $array[] = $item->getUrl();
        }
        return $array;
    }

    public function getAllChildCategories()
    {
        $category = $this->registry->registry('current_category');
        return $category->getChildrenCategories();

    }
}
